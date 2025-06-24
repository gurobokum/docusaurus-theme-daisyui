import React from "react";
import type { Decorator, Meta, StoryObj } from "@storybook/react-webpack5";
import DocBreadcrumbs from "./index";
import { DocsSidebarProvider } from "@docusaurus/plugin-content-docs/client";
import {
  PropSidebarBreadcrumbsItem,
  PropSidebarItemLink,
} from "@docusaurus/plugin-content-docs";

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

const BreadcrumbsDecorator: Decorator = (Story) => {
  return (
    <DocsSidebarProvider name="default" items={items}>
      <Story />
    </DocsSidebarProvider>
  );
};

const meta = {
  title: "Doc/Breadcrumbs",
  component: DocBreadcrumbs,
  decorators: [BreadcrumbsDecorator],
} satisfies Meta<typeof DocBreadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
