import React from "react";
import type { Decorator, Meta, StoryObj } from "@storybook/react-webpack5";
import AnnouncementBar from "./index";
import { AnnouncementBarProvider } from "@docusaurus/theme-common/internal";

const AnnouncementBarDecorator: Decorator = (Story) => (
  <AnnouncementBarProvider>
    <Story />
  </AnnouncementBarProvider>
);

const meta = {
  title: "Theme/AnnouncementBar",
  component: AnnouncementBar,
  decorators: [AnnouncementBarDecorator],
} satisfies Meta<typeof AnnouncementBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
