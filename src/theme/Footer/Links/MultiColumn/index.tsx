import React, { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import LinkItem from "@theme/Footer/LinkItem";
import type { Props } from "@theme/Footer/Links/MultiColumn";

type ColumnType = Props["columns"][number];
type ColumnItemType = ColumnType["items"][number];

function ColumnLinkItem({ item }: { item: ColumnItemType }) {
  return item.html ? (
    <li
      className={twMerge("my-2", item.className)}
      // Developer provided the HTML, so assume it's safe.
      dangerouslySetInnerHTML={{ __html: item.html }}
    />
  ) : (
    <li key={item.href ?? item.to} className="my-2">
      <LinkItem item={item} />
    </li>
  );
}

function Column({ column }: { column: ColumnType }) {
  return (
    <nav className={twMerge("", column.className)}>
      <div className="footer-title">{column.title}</div>
      <ul className="list-none m-0 p-0">
        {column.items.map((item, i) => (
          <ColumnLinkItem key={i} item={item} />
        ))}
      </ul>
    </nav>
  );
}

export default function FooterLinksMultiColumn({ columns }: Props): ReactNode {
  return (
    <>
      {columns.map((column, i) => (
        <Column key={i} column={column} />
      ))}
    </>
  );
}
