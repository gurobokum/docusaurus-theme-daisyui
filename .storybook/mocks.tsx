import React from "react";
import {
  PropSidebarBreadcrumbsItem,
  PropSidebarItemLink,
} from "@docusaurus/plugin-content-docs";

export const BlogPostContent = Object.assign(
  () => <div>Blog Post Content</div>,
  {
    contentTitle: "Welcome to Docusaurus Blog!",
    toc: [],
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
        {
          label: "hello",
          permalink: "/blog/tags/hello",
          description: "Greeting posts",
          inline: true,
        },
        {
          label: "docusaurus",
          permalink: "/blog/tags/docusaurus",
          description: "Posts about Docusaurus",
          inline: true,
        },
      ],
      unlisted: false,
      lastUpdatedAt: 1717190400, // Unix timestamp for "2024-06-01T10:00:00.000Z"
      lastUpdatedBy: "Jane Doe",
    },
    assets: {
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      authorsImageUrls: ["https://randomuser.me/api/portraits/women/44.jpg"],
    },
  },
);

export const DocContent = Object.assign(() => <div>Doc Content</div>, {
  contentTitle: "Welcome to Docusaurus Docs!",
  toc: [],
  frontMatter: {
    id: "getting-started",
    title: "Getting Started with Our Project",
    tags: [
      { label: "getting-started", permalink: "/" },
      { label: "setup", permalink: "/" },
    ],
    hide_title: false,
    hide_table_of_contents: false,
    keywords: ["installation", "quickstart", "guide"],
    image: "https://picsum.photos/200/300",
    description:
      "A comprehensive guide to quickly set up and start using our project.",
    slug: "/introduction",
    sidebar_label: "Introduction",
    sidebar_position: 1,
    sidebar_class_name: "highlighted-item",
    sidebar_custom_props: {
      icon: "🚀",
      category: "basics",
    },
    displayed_sidebar: "main-sidebar",
    pagination_label: "Start Here",
    custom_edit_url:
      "https://github.com/your-repo/edit/main/docs/getting-started.md",
    parse_number_prefixes: true,
    toc_min_heading_level: 2,
    toc_max_heading_level: 4,
    pagination_next: "installation-guide",
    pagination_prev: null,
    draft: false,
    unlisted: false,
    last_update: {
      author: "John Doe",
      date: "2024-06-25",
    },
  },
  metadata: {
    lastUpdatedBy: "Alice Johnson",
    lastUpdatedAt: 1678886400, // March 15, 2023, 12:00:00 PM UTC
    id: "introduction",
    version: "1.0.0",
    title: "Getting Started Guide",
    description:
      "An introductory guide to setting up our product for the first time.",
    source: "@site/docs/v1/introduction.md",
    sourceDirName: "v1",
    slug: "/introduction",
    permalink: "/",
    draft: false,
    unlisted: false,
    sidebarPosition: 1,
    editUrl: "https://github.com/your-repo/edit/main/docs/v1/introduction.md",
    tags: [
      {
        label: "getting-started",
        permalink: "/",
        description: "Initial setup guide",
        inline: true,
      },
      {
        label: "v1",
        permalink: "/",
        description: "Version 1 documentation",
        inline: true,
      },
    ],
    frontMatter: {},
    previous: { title: "Previous", permalink: "/" },
    next: { title: "Next", permalink: "/" },
  },
  assets: {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
});

export const DocVersion = {
  label: "1.0.0",
  version: "1.0.0",
  pluginId: "default",
  banner: null,
  badge: true,
  className: "",
  isLast: false,
  noIndex: false,
  docsSidebars: {},
  docs: {},
};

export const SidebarItems: PropSidebarBreadcrumbsItem[] = [
  {
    type: "category",
    label: "Home",
    description: "Home page",
    collapsed: false,
    collapsible: true,
    items: [
      {
        collapsed: true,
        collapsible: true,
        type: "category",
        label: "Category",
        items: [
          {
            type: "link",
            href: "/",
            label: "Sub",
          } satisfies PropSidebarItemLink,
        ],
      },
    ],
  },
];
