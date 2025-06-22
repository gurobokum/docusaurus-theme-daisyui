import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Admonition from "./index";

const meta = {
  title: "Theme/Admonition",
  component: Admonition,
  tags: ["autodocs"],
  args: {
    type: "info",
    title: "Info Admonition",
    children: "This is an info admonition rendered with Tailwind/DaisyUI.",
  },
} satisfies Meta<typeof Admonition>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tip: Story = {
  args: {
    type: "tip",
    title: "Tip Admonition",
    children: "This is a tip admonition.",
  },
};

export const Note: Story = {
  args: {
    type: "note",
    title: "Note Admonition",
    children: "This is a note admonition.",
  },
};

export const Info: Story = {
  args: {
    type: "info",
    title: "Info Admonition",
    children: "This is an info admonition.",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    title: "Warning Admonition",
    children: "This is a warning admonition.",
  },
};

export const Danger: Story = {
  args: {
    type: "danger",
    title: "Danger Admonition",
    children: "This is a danger admonition.",
  },
};
