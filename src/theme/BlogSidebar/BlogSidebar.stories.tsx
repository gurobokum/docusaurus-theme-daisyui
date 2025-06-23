import type { Meta, StoryObj } from "@storybook/react-webpack5";
import BlogSidebar from "./index";

const meta = {
  title: "Blog/Sidebar",
  component: BlogSidebar,
} satisfies Meta<typeof BlogSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sidebar: {
      title: "History",
      items: [
        {
          title: "Old post",
          permalink: "/blog/old-post",
          unlisted: false,
          date: "2023-10-01",
        },
        {
          title: "New post",
          permalink: "/blog/new-post",
          unlisted: false,
          date: "2025-05-01",
        },
      ],
    },
  },
};
