import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Layout from "./index";

const meta = {
  title: "Theme/Layout",
  component: Layout,
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Layout Example",
    description: "This is an example of a layout component in Docusaurus.",
  },
};
