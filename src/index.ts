//import type { Plugin } from "@docusaurus/types";
//export { validateOptions, validateThemeConfig } from "@docusaurus/theme-common";

export default function themeDaisyui() {
  return {
    name: "docusaurus-theme-daisyui",

    getThemePath() {
      return "../lib/theme";
    },
    getTypeScriptThemePath() {
      return "../src/theme";
    },
  };
}

//export function validateOptions({ options, validate }) {}
