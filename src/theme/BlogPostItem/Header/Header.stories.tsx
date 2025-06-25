import React from "react";
import type { Decorator, Meta, StoryObj } from "@storybook/react-webpack5";
import Header from "./index";
import { BlogPostProvider } from "@docusaurus/plugin-content-blog/client";
import { BlogPostContent } from "../../../../.storybook/mocks";

const HeaderDecorator: Decorator = (Story) => (
  <BlogPostProvider content={BlogPostContent}>
    <Story />
  </BlogPostProvider>
);

const meta = {
  title: "Blog/Post/Header",
  component: Header,
  decorators: [HeaderDecorator],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
