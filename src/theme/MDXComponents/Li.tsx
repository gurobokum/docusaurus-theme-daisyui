import React, { type ReactNode } from "react";
import useBrokenLinks from "@docusaurus/useBrokenLinks";
import type { Props } from "@theme/MDXComponents/Li";

export default function MDXLi(props: Props): ReactNode | undefined {
  // MDX Footnotes have ids such as <li id="user-content-fn-1-953011">
  useBrokenLinks().collectAnchor(props.id);

  return <li {...props} />;
}
