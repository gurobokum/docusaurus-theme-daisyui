import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Details from "./index";

const meta = {
  title: "Theme/Details",
  component: Details,
  args: {
    summary: "Details Summary",
    children: "Details Content",
  },
} satisfies Meta<typeof Details>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
