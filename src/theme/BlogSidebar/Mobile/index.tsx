import React, { memo, type ReactNode } from "react";
import {
  useVisibleBlogSidebarItems,
  BlogSidebarItemList,
} from "@docusaurus/plugin-content-blog/client";
import { NavbarSecondaryMenuFiller } from "@docusaurus/theme-common";
import BlogSidebarContent from "@theme/BlogSidebar/Content";
import type { Props } from "@theme/BlogSidebar/Mobile";
import type { Props as BlogSidebarContentProps } from "@theme/BlogSidebar/Content";

import styles from "./styles.module.css";

const ListComponent: BlogSidebarContentProps["ListComponent"] = ({
  items,
}: {
  items: BlogSidebarContentProps["items"];
}) => {
  return (
    <BlogSidebarItemList
      items={items}
      ulClassName="menu__list"
      liClassName="menu__list-item"
      linkClassName="menu__link"
      linkActiveClassName="menu__link--active"
    />
  );
};

function BlogSidebarMobileSecondaryMenu({ sidebar }: Props): ReactNode {
  const items = useVisibleBlogSidebarItems(sidebar.items);
  return (
    <BlogSidebarContent
      items={items}
      ListComponent={ListComponent}
      yearGroupHeadingClassName={styles.yearGroupHeading}
    />
  );
}

function BlogSidebarMobile(props: Props): ReactNode {
  return (
    <NavbarSecondaryMenuFiller
      component={BlogSidebarMobileSecondaryMenu}
      props={props}
    />
  );
}

export default memo(BlogSidebarMobile);
