import React from "react";
import type { Decorator, Meta, StoryObj } from "@storybook/react-webpack5";
import { DocsVersionProvider } from "@docusaurus/plugin-content-docs/client";
import { DocsSidebarProvider } from "@docusaurus/plugin-content-docs/client";
import {
  PropSidebarBreadcrumbsItem,
  PropSidebarItemLink,
} from "@docusaurus/plugin-content-docs";

import DocCategoryGeneratedIndexPage from "./index";

const version = {
  label: "1.0.0",
  version: "1.0.0",
  pluginId: "default",
  banner: null,
  badge: true,
  className: "",
  isLast: false,
  noIndex: false,
  docsSidebars: {},
  docs: {},
};

const items: PropSidebarBreadcrumbsItem[] = [
  {
    type: "category",
    label: "Home",
    description: "Home page",
    collapsed: false,
    collapsible: true,
    items: [
      {
        collapsed: true,
        collapsible: true,
        type: "category",
        label: "Category",
        items: [
          {
            type: "link",
            href: "/",
            label: "Sub",
          } satisfies PropSidebarItemLink,
        ],
      },
    ],
  },
];

const DocCategoryDecorator: Decorator = (Story) => (
  <DocsSidebarProvider name="default" items={items}>
    <DocsVersionProvider version={version}>
      <Story />
    </DocsVersionProvider>
  </DocsSidebarProvider>
);

const meta = {
  title: "Doc/CategoryGeneratedIndexPage",
  component: DocCategoryGeneratedIndexPage,
  args: {
    categoryGeneratedIndex: {
      title: "Category Title",
      description: "This is a description of the category.",
      keywords: ["keyword1", "keyword2"],
      slug: "category-slug",
      permalink: "/category-slug",
      navigation: {
        previous: { title: "Previous", permalink: "/" },
        next: { title: "Next", permalink: "/" },
      },
    },
  },
  decorators: [DocCategoryDecorator],
} satisfies Meta<typeof DocCategoryGeneratedIndexPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
