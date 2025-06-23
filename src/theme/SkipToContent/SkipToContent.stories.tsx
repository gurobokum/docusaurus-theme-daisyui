import type { Meta, StoryObj } from "@storybook/react-webpack5";
import SkipToContent from "./index";

const meta = {
  title: "Theme/SkipToContent",
  component: SkipToContent,
} satisfies Meta<typeof SkipToContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
