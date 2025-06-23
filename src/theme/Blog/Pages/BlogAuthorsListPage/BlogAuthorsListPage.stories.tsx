import type { Meta, StoryObj } from "@storybook/react-webpack5";
import BlogAuthorsListPage from "./index";

const meta = {
  title: "Blog/Pages/AuthorsList",
  component: BlogAuthorsListPage,
} satisfies Meta<typeof BlogAuthorsListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sidebar: {
      title: "History",
      items: [
        {
          title: "Old post",
          date: "2023-10-01",
          unlisted: false,
        },
        {
          title: "New post",
          date: "2025-05-01",
          unlisted: false,
        },
      ],
    },
    authors: [
      {
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
        },
        count: 12,
      },
      {
        key: "john-smith",
        name: "John Smith",
        title: "Tech Editor",
        email: "john@example.com",
        url: "https://example.com/john",
        imageURL: "https://randomuser.me/api/portraits/men/45.jpg",
        page: null,
        socials: {
          linkedin: "https://linkedin.com/in/johnsmith",
          mastodon: "https://mastodon.social/@johnsmith",
        },
        count: 8,
      },
      {
        key: "alex-lee",
        name: "Alex Lee",
        title: "Contributor",
        email: "alex@example.com",
        url: "https://example.com/alex",
        imageURL: "https://randomuser.me/api/portraits/men/46.jpg",
        page: null,
        socials: {
          youtube: "https://youtube.com/@alexlee",
          instagram: "https://instagram.com/alexlee",
        },
        count: 5,
      },
    ],
  },
};
