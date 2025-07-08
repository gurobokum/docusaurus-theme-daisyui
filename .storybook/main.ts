import path from "path";
import { loadSite } from "@docusaurus/core/lib/server/site";
import { getAllClientModules } from "@docusaurus/core/lib/server/clientModules";
import type { Configuration, RuleSetRule } from "webpack";
import {
  createBuildClientConfig,
  createStartClientConfig,
} from "@docusaurus/core/lib/webpack/client";
import {
  createConfigureWebpackUtils,
  executePluginsConfigureWebpack,
} from "@docusaurus/core/lib/webpack/configure";
import type { StorybookConfig } from "@storybook/react-webpack5";
import { LoadedPlugin, Props } from "@docusaurus/types";

const ruleMatches = (rule: RuleSetRule, ...inputs: string[]) =>
  inputs.some((input) => "test" in rule && (rule.test as RegExp).test(input));

const normalizeEntry = (entry: Configuration["entry"]): string[] =>
  Array.isArray(entry) ? entry : ([entry].filter(Boolean) as string[]);

const getDocusaurusConfig = async (props: Props, configType?: string) => {
  const configureWebpackUtils = await createConfigureWebpackUtils({
    siteConfig: props.siteConfig,
  });

  if (configType === "PRODUCTION") {
    console.log("Docusaurus: using production configuration");
    const { config: clientConfig } = await createBuildClientConfig({
      props,
      minify: true,
      faster: props.siteConfig.future.experimental_faster,
      configureWebpackUtils,
      bundleAnalyzer: false,
    });
    return clientConfig;
  }

  console.log("Docusaurus: using development configuration");
  const { clientConfig } = await createStartClientConfig({
    props,
    minify: false,
    poll: false,
    faster: props.siteConfig.future.experimental_faster,
    configureWebpackUtils,
  });
  return clientConfig;
};

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-webpack5-compiler-swc"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config, { configType }) => {
    const { props } = await loadSite({
      siteDir: path.resolve(__dirname, "../docs"),
    });

    const docusaurusConfig = await getDocusaurusConfig(props, configType);
    const entries = getAllClientModules(props.plugins);

    let finalConfig: Configuration = {
      ...config,
      name: docusaurusConfig.name,
      entry: [
        ...normalizeEntry(config.entry),
        ...normalizeEntry(docusaurusConfig.entry),
        ...entries,
      ],
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          ...docusaurusConfig.resolve?.alias,
        },
        roots: [
          ...(config.resolve?.roots || []),
          ...(docusaurusConfig.resolve?.roots || []),
        ],
      },
      module: {
        ...config.module,
        rules: [
          ...(config.module?.rules || []),
          ...((docusaurusConfig.module?.rules as RuleSetRule[])?.filter(
            (rule) => ruleMatches(rule, ".svg", ".js", ".woff"),
          ) || []),
        ],
      },
      plugins: [...(config.plugins || []), ...(docusaurusConfig.plugins || [])],
    };

    const configureWebpackUtils = await createConfigureWebpackUtils({
      siteConfig: props.siteConfig,
    });
    finalConfig = executePluginsConfigureWebpack({
      plugins: props.plugins as LoadedPlugin[],
      config: finalConfig,
      isServer: false,
      configureWebpackUtils,
    });

    return finalConfig;
  },
};
export default config;
