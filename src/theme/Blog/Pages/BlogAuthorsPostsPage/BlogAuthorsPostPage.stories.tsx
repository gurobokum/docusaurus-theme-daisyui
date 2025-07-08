import type { Meta, StoryObj } from "@storybook/react-webpack5";
import BlogAuthorsPostPage from "./index";

const meta = {
  title: "Blog/Pages/BlogAuthorsPostPage",
  component: BlogAuthorsPostPage,
} satisfies Meta<typeof BlogAuthorsPostPage>;

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
    author: {
      key: "jane-doe",
      name: "Jane Doe",
      title: "Senior Writer",
      url: "https://example.com/jane",
      imageURL: "https://randomuser.me/api/portraits/women/44.jpg",
      page: { permalink: "/authors/jane-doe" },
      socials: { twitter: "https://twitter.com/janedoe" },
      description: "Writes about tech and culture.",
      count: 2,
    },
    listMetadata: {
      blogTitle: "My Blog",
      blogDescription: "A Docusaurus powered blog!",
      page: 1,
      postsPerPage: 10,
      totalCount: 2,
      totalPages: 1,
      permalink: "/blog/authors/jane-doe",
      previousPage: undefined,
      nextPage: undefined,
    },
    items: [
      /*
      {
        content: {
          id: "welcome-docusaurus-v2",
          metadata: {
            source: "@site/blog/2023-10-01-old-post.md",
            title: "Old post",
            date: "2023-10-01T00:00:00.000Z",
            permalink: "/blog/old-post",
            description: "This is an old post.",
            authors: [
              {
                key: "jane-doe",
                name: "Jane Doe",
                title: "Senior Writer",
                url: "https://example.com/jane",
                imageURL: "https://randomuser.me/api/portraits/women/44.jpg",
                page: { permalink: "/authors/jane-doe" },
                socials: { twitter: "https://twitter.com/janedoe" },
                description: "Writes about tech and culture.",
              },
            ],
            frontMatter: {},
            tags: [
              { label: "history", permalink: "/blog/tags/history" },
            ],
            unlisted: false,
            hasTruncateMarker: false,
          },
          content: "<p>This is the content of the old post.</p>",
        },
      },
      {
        content: {
          id: "new-post",
          metadata: {
            source: "@site/blog/2025-05-01-new-post.md",
            title: "New post",
            date: "2025-05-01T00:00:00.000Z",
            permalink: "/blog/new-post",
            description: "This is a new post.",
            authors: [
              {
                key: "jane-doe",
                name: "Jane Doe",
                title: "Senior Writer",
                url: "https://example.com/jane",
                imageURL: "https://randomuser.me/api/portraits/women/44.jpg",
                page: { permalink: "/authors/jane-doe" },
                socials: { twitter: "https://twitter.com/janedoe" },
                description: "Writes about tech and culture.",
              },
            ],
            frontMatter: {},
            tags: [
              { label: "recent", permalink: "/blog/tags/recent" },
            ],
            unlisted: false,
            hasTruncateMarker: false,
          },
          content: "<p>This is the content of the new post.</p>",
        },
      },
      */
    ],
  },
};
