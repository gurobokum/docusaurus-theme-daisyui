import React, { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import isInternalUrl from "@docusaurus/isInternalUrl";
import IconExternalLink from "@theme/Icon/ExternalLink";
import type { Props } from "@theme/Footer/LinkItem";

export default function FooterLinkItem({ item }: Props): ReactNode {
  const { to, href, label, prependBaseUrlToHref, className, ...props } = item;
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });

  return (
    <Link
      className={twMerge(
        "link link-hover inline-block flex flex-row items-center gap-2",
        className,
      )}
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}
    >
      <span>{label}</span>
      {href && !isInternalUrl(href) && <IconExternalLink />}
    </Link>
  );
}
