import React, { type ReactNode } from "react";
import { SkipToContentLink } from "@docusaurus/theme-common";
import styles from "./styles.module.css";

export default function SkipToContent(): ReactNode {
  return <SkipToContentLink className={styles.skipToContent} />;
}
