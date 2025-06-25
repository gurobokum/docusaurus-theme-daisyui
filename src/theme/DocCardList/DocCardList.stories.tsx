import React from "react";
import type { Decorator, Meta, StoryObj } from "@storybook/react-webpack5";
import { DocsVersionProvider } from "@docusaurus/plugin-content-docs/client";

import { DocVersion } from "../../../.storybook/mocks";
import DocCardList from "./index";

const DocCardDecorator: Decorator = (Story) => (
  <DocsVersionProvider version={DocVersion}>
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
