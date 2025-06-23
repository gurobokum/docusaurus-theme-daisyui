import React from "react";
import type { Decorator, Meta, StoryObj } from "@storybook/react-webpack5";
import Header from "./index";
import { BlogPostProvider } from "@docusaurus/plugin-content-blog/client";

const content = {
  frontMatter: {
    id: "welcome-docusaurus-v2",
    title: "Welcome Docusaurus",
    title_meta: "Welcome to Docusaurus Blog!",
    description: "This is my first post on Docusaurus.",
    sidebar_label: "Welcome",
    tags: [
      { label: "hello", permalink: "/blog/tags/hello" },
      { label: "docusaurus", permalink: "/blog/tags/docusaurus" },
    ],
    slug: "welcome-docusaurus-v2",
    draft: false,
    unlisted: false,
    date: "2024-06-01T10:00:00.000Z",
    authors: [
      {
        name: "Jane Doe",
        title: "Senior Writer",
        url: "https://example.com/jane",
        imageURL: "https://randomuser.me/api/portraits/women/44.jpg",
        socials: { twitter: "https://twitter.com/janedoe" },
      },
    ],
    author: "Jane Doe",
    author_title: "Senior Writer",
    author_url: "https://example.com/jane",
    author_image_url: "https://randomuser.me/api/portraits/women/44.jpg",
    authorTitle: "Senior Writer",
    authorURL: "https://example.com/jane",
    authorImageURL: "https://randomuser.me/api/portraits/women/44.jpg",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    keywords: ["docusaurus", "blog", "hello"],
    hide_table_of_contents: false,
    toc_min_heading_level: 2,
    toc_max_heading_level: 3,
    last_update: {
      date: "2024-06-01T10:00:00.000Z",
      author: "Jane Doe",
    },
  },
  metadata: {
    source: "@site/blog/2024-06-01-welcome-docusaurus-v2.md",
    title: "Welcome Docusaurus",
    date: "2024-06-01T10:00:00.000Z",
    permalink: "/blog/welcome-docusaurus-v2",
    description: "This is my first post on Docusaurus.",
    editUrl:
      "https://github.com/example/repo/edit/main/blog/2024-06-01-welcome-docusaurus-v2.md",
    readingTime: 2,
    hasTruncateMarker: false,
    nextItem: { title: "Second Post", permalink: "/blog/second-post" },
    prevItem: undefined,
    authors: [
      {
        name: "Jane Doe",
        title: "Senior Writer",
        url: "https://example.com/jane",
        imageURL: "https://randomuser.me/api/portraits/women/44.jpg",
        socials: { twitter: "https://twitter.com/janedoe" },
        key: "jane-doe",
        page: { permalink: "/authors/jane-doe" },
        description: "Writes about tech and culture.",
      },
    ],
    frontMatter: {},
    tags: [
      { label: "hello", permalink: "/blog/tags/hello" },
      { label: "docusaurus", permalink: "/blog/tags/docusaurus" },
    ],
    unlisted: false,
  },
  assets: {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    authorsImageUrls: ["https://randomuser.me/api/portraits/women/44.jpg"],
  },
};

const HeaderDecorator: Decorator = (Story) => (
  <BlogPostProvider content={content}>
    <Story />
  </BlogPostProvider>
);

const meta = {
  title: "Blog/Post/Header",
  component: Header,
  decorators: [HeaderDecorator],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
