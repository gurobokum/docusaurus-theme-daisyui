import type { Meta, StoryObj } from "@storybook/react-webpack5";
import BlogAuthor from "./index";

const meta = {
  title: "Blog/Author",
  component: BlogAuthor,
} satisfies Meta<typeof BlogAuthor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    author: {
      key: "jane-doe",
      name: "Jane Doe",
      title: "Senior Writer",
      email: "jane@example.com",
      url: "https://example.com/jane",
      imageURL: "https://randomuser.me/api/portraits/women/44.jpg",
      page: null,
      socials: {
        twitter: "https://twitter.com/janedoe",
        github: "https://github.com/janedoe",
        stackoverflow: "https://stackoverflow.com/users/123456/janedoe",
        linkedin: "https://linkedin.com/in/janedoe",
        x: "https://x.com/janedoe",
        bluesky: "https://bsky.app/profile/janedoe",
        instagram: "https://instagram.com/janedoe",
        threads: "https://threads.net/@janedoe",
        mastodon: "https://mastodon.social/@janedoe",
        youtube: "https://youtube.com/@janedoe",
        twitch: "https://twitch.tv/janedoe",
      },
    },
    className: "",
    count: 12,
  },
};
