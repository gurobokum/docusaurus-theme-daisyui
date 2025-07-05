import type { Meta, StoryObj } from "@storybook/react-webpack5";
import React from "react";
import CodeBlock from "./index";

const meta = {
  title: "Theme/CodeBlock",
  component: CodeBlock,
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

const codeStr = `
function helloWorld() {
  console.log("Hello, world!");
}
`;
export const String: Story = {
  args: {
    title: "Hello World Function",
    language: "javascript",
    children: codeStr,
  },
};

export const Element: Story = {
  args: {
    children: <div>Some JSX content</div>,
  },
};
