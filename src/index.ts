import path from "path";
import { Joi } from "@docusaurus/utils-validation";
import type {
  ThemeConfigValidationContext,
  OptionValidationContext,
  PostCssOptions,
} from "@docusaurus/types";

// Docs: https://docusaurus.io/docs/api/plugin-methods
export default function themeDaisyui() {
  return {
    name: "docusaurus-theme-daisyui",

    getThemePath() {
      return "../lib/theme";
    },

    getTypeScriptThemePath() {
      return "../src/theme";
    },

    configurePostCss(postcssOptions: PostCssOptions) {
      postcssOptions.plugins = [
        ...(postcssOptions.plugins || []),
        "@tailwindcss/postcss",
      ];
      return postcssOptions;
    },

    getClientModules() {
      return [path.resolve(__dirname, "./global.css")];
    },
  };
}

export type ThemeConfig = object;
export type PluginOptions = object;
export type Options = PluginOptions;

export const Schema = Joi.object<ThemeConfig>({});
export const PluginOptionSchema = Joi.object<PluginOptions>({});

export function validateThemeConfig({
  validate,
  themeConfig,
}: ThemeConfigValidationContext<ThemeConfig>): ThemeConfig {
  return validate(Schema, themeConfig);
}

export function validateOptions({
  validate,
  options,
}: OptionValidationContext<Options, PluginOptions>): PluginOptions {
  const validatedOptions = validate(PluginOptionSchema, options);
  return validatedOptions;
}
