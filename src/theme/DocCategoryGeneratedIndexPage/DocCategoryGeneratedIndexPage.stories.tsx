import React from "react";
import type { Decorator, Meta, StoryObj } from "@storybook/react-webpack5";
import { DocsVersionProvider } from "@docusaurus/plugin-content-docs/client";
import { DocsSidebarProvider } from "@docusaurus/plugin-content-docs/client";

import { DocVersion, SidebarItems } from "../../../.storybook/mocks";
import DocCategoryGeneratedIndexPage from "./index";

const DocCategoryDecorator: Decorator = (Story) => (
  <DocsSidebarProvider name="default" items={SidebarItems}>
    <DocsVersionProvider version={DocVersion}>
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
