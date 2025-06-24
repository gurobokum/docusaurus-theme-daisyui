import React from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import CodeBlock from "./index";
import type { Props as StringProps } from "@theme/CodeBlock/Content/String";
import type { Props as ElementProps } from "@theme/CodeBlock/Content/Element";

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
  render: (args: StringProps) => <CodeBlock {...args}>{codeStr}</CodeBlock>,
  args: {
    title: "Hello World Function",
    language: "javascript",
  },
};

export const Element: Story = {
  render: (args: ElementProps) => (
    <CodeBlock {...args}>
      <div>Some JSX content</div>
    </CodeBlock>
  ),
};
