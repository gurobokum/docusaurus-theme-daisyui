import React, { type ReactNode } from "react";
import type { Props } from "@theme/Icon/ExternalLink";

import styles from "./styles.module.css";

// References symbol in docusaurus-theme-classic/src/inlineSvgSprites.ts
// See why: https://github.com/facebook/docusaurus/issues/5865
const svgSprite = "#theme-svg-external-link";

export default function IconExternalLink({
  width = 13.5,
  height = 13.5,
}: Props): ReactNode {
  return (
    <svg
      width={width}
      height={height}
      aria-hidden="true"
      className={styles.iconExternalLink}
    >
      <use href={svgSprite} />
    </svg>
  );
}
