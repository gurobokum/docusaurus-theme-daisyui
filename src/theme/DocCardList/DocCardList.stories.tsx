import React from "react";
import type { Decorator, Meta, StoryObj } from "@storybook/react-webpack5";
import { DocsVersionProvider } from "@docusaurus/plugin-content-docs/client";

import DocCardList from "./index";

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
  title: "Doc/CardList",
  args: {
    items: [
      {
        type: "link",
        href: "/",
        label: "Link",
      },
      {
        type: "category",
        href: "/category",
        label: "category",
        items: [
          {
            type: "link",
            href: "/sublink",
            label: "Sublink",
          },
        ],
      },
    ],
  },
  component: DocCardList,
  decorators: [DocCardDecorator],
} satisfies Meta<typeof DocCardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
