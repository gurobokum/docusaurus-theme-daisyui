import React, { type ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import type { Props } from "@theme/Tag";

import styles from "./styles.module.css";

export default function Tag({
  permalink,
  label,
  count,
  description,
}: Props): ReactNode {
  return (
    <Link
      rel="tag"
      href={permalink}
      title={description}
      className={clsx(
        styles.tag,
        count ? styles.tagWithCount : styles.tagRegular,
      )}
    >
      {label}
      {count && <span>{count}</span>}
    </Link>
  );
}
