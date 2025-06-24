import React from "react";
import type { Decorator, Meta, StoryObj } from "@storybook/react-webpack5";
import DocCard from "./index";
import { DocsVersionProvider } from "@docusaurus/plugin-content-docs/client";

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

const DocCardDecorator: Decorator = (Story) => (
  <DocsVersionProvider version={version}>
    <Story />
  </DocsVersionProvider>
);

const meta = {
  title: "Doc/Card",
  component: DocCard,
  decorators: [DocCardDecorator],
} satisfies Meta<typeof DocCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Link: Story = {
  args: {
    item: {
      type: "link",
      href: "/",
      label: "Link",
    },
  },
};

export const Category: Story = {
  args: {
    item: {
      type: "category",
      label: "Category",
      collapsed: false,
      collapsible: true,
      items: [
        {
          type: "link",
          href: "/",
          label: "Link",
        },
      ],
    },
  },
};
