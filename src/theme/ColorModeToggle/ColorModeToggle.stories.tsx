import React from "react";
import type { Decorator, Meta, StoryObj } from "@storybook/react-webpack5";
import ColorModeToggle from "./index";

const meta = {
  title: "Theme/ColorModeToggle",
  component: ColorModeToggle,
  tags: ["autodocs"],
  args: {
    className: "",
    buttonClassName: "",
    onChage: () => {},
  },
} satisfies Meta<typeof ColorModeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    value: "light",
  },
  decorators: [
    ((Story) => (
      <div data-theme-choice="light">
        <Story />
      </div>
    )) satisfies Decorator,
  ],
};

export const Dark: Story = {
  args: {
    value: "dark",
  },
  decorators: [
    ((Story) => (
      <div data-theme-choice="dark">
        <Story />
      </div>
    )) satisfies Decorator,
  ],
};

export const System: Story = {
  args: {
    value: null,
  },
  decorators: [
    ((Story) => (
      <div data-theme-choice="system">
        <Story />
      </div>
    )) satisfies Decorator,
  ],
};
