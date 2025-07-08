import React from "react";
import type { Decorator, Meta, StoryObj } from "@storybook/react-webpack5";
import { DocsVersionProvider } from "@docusaurus/plugin-content-docs/client";
import { DocsSidebarProvider } from "@docusaurus/plugin-content-docs/client";
import { DocProvider } from "@docusaurus/plugin-content-docs/client";

import DocItem from "./index";
import {
  DocContent,
  DocVersion,
  SidebarItems,
} from "../../../.storybook/mocks";

const DocCardDecorator: Decorator = (Story) => (
  <DocProvider content={DocContent}>
    <DocsSidebarProvider name="default" items={SidebarItems}>
      <DocsVersionProvider version={DocVersion}>
        <Story />
      </DocsVersionProvider>
    </DocsSidebarProvider>
  </DocProvider>
);

const meta = {
  title: "Doc/Item",
  component: DocItem,
  args: {
    content: DocContent,
  },
  /*
  args: {
    route: {
      exact: true,
      path: "/",
      component: () => <div></div>,
    },
    content: DocContent,
  },
  */
  decorators: [DocCardDecorator],
} satisfies Meta<typeof DocItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
