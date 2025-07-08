import React, { type ReactNode } from "react";
import { HtmlClassNameProvider, PageMetadata } from "@docusaurus/theme-common";
import {
  getDocsVersionSearchTag,
  DocsVersionProvider,
} from "@docusaurus/plugin-content-docs/client";
import renderRoutes from "@docusaurus/renderRoutes";
import SearchMetadata from "@theme/SearchMetadata";

import type { Props } from "@theme/DocVersionRoot";

function DocVersionRootMetadata(props: Props): ReactNode {
  const { version } = props;
  return (
    <>
      <SearchMetadata
        version={version.version}
        tag={getDocsVersionSearchTag(version.pluginId, version.version)}
      />
      <PageMetadata>
        {version.noIndex && <meta name="robots" content="noindex, nofollow" />}
      </PageMetadata>
    </>
  );
}

function DocVersionRootContent(props: Props): ReactNode {
  const { version, route } = props;
  console.log("DocVersionRootContent", version, route);
  return (
    <HtmlClassNameProvider className={version.className}>
      <DocsVersionProvider version={version}>
        {renderRoutes(route.routes!)}
      </DocsVersionProvider>
    </HtmlClassNameProvider>
  );
}
export default function DocVersionRoot(props: Props): ReactNode {
  return (
    <>
      <DocVersionRootMetadata {...props} />
      <DocVersionRootContent {...props} />
    </>
  );
}
