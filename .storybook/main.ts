import { loadSite } from "@docusaurus/core/lib/server/site";
import { getAllClientModules } from "@docusaurus/core/lib/server/clientModules";
import type { Configuration, RuleSetRule } from "webpack";
import { createBuildClientConfig } from "@docusaurus/core/lib/webpack/client";
import {
  createConfigureWebpackUtils,
  executePluginsConfigureWebpack,
} from "@docusaurus/core/lib/webpack/configure";
import type { StorybookConfig } from "@storybook/react-webpack5";
import { LoadedPlugin } from "@docusaurus/types";

const ruleMatches = (rule: RuleSetRule, ...inputs: string[]) =>
  inputs.some((input) => "test" in rule && (rule.test as RegExp).test(input));

const normalizeEntry = (entry: Configuration["entry"]): string[] =>
  Array.isArray(entry) ? entry : ([entry].filter(Boolean) as string[]);

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-webpack5-compiler-swc", "@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    const { props } = await loadSite({ siteDir: process.cwd() });

    const configureWebpackUtils = await createConfigureWebpackUtils({
      siteConfig: props.siteConfig,
    });
    const { config: clientConfig } = await createBuildClientConfig({
      props,
      minify: false,
      faster: props.siteConfig.future.experimental_faster,
      configureWebpackUtils,
      bundleAnalyzer: false,
    });

    const entries = getAllClientModules(props.plugins);

    let finalConfig: Configuration = {
      ...config,
      entry: [
        ...normalizeEntry(config.entry),
        ...normalizeEntry(clientConfig.entry),
        ...entries,
      ],
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          ...clientConfig.resolve?.alias,
        },
        roots: [
          ...(config.resolve?.roots || []),
          ...(clientConfig.resolve?.roots || []),
        ],
      },
      module: {
        ...config.module,
        rules: [
          ...(config.module?.rules || []),
          ...((clientConfig.module?.rules as RuleSetRule[])?.filter((rule) =>
            ruleMatches(rule, ".svg", ".js", ".woff"),
          ) || []),
        ],
      },
      plugins: [...(config.plugins || []), ...(clientConfig.plugins || [])],
    };

    console.warn(finalConfig.entry, entries);

    finalConfig = executePluginsConfigureWebpack({
      plugins: props.plugins as LoadedPlugin[],
      config: finalConfig,
      isServer: false,
      configureWebpackUtils,
    });

    // For some reason there are exclude` properties
    // with undefined values, so let's filter those out
    finalConfig.module!.rules = (
      finalConfig.module!.rules as RuleSetRule[]
    ).map((rule) => {
      if (rule.exclude && Array.isArray(rule.exclude)) {
        rule.exclude = rule.exclude.filter(Boolean);
      }

      return rule;
    });
    finalConfig.module!.rules = (
      finalConfig.module!.rules as RuleSetRule[]
    ).map((rule) => {
      if (Array.isArray(rule.exclude)) {
        rule.exclude = rule.exclude.filter((value) => !!value);
      }
      return rule;
    });

    return finalConfig;
  },
};
export default config;
