import React, { type ReactNode } from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useDocsVersion } from "@docusaurus/plugin-content-docs/client";
import type { Props } from "@theme/DocVersionBadge";

export default function DocVersionBadge({ className }: Props): ReactNode {
  const versionMetadata = useDocsVersion();
  if (versionMetadata.badge) {
    return (
      <span
        className={clsx(
          className,
          ThemeClassNames.docs.docVersionBadge,
          "badge badge--secondary",
        )}
      >
        <Translate
          id="theme.docs.versionBadge.label"
          values={{ versionLabel: versionMetadata.label }}
        >
          {"Version: {versionLabel}"}
        </Translate>
      </span>
    );
  }
  return null;
}
