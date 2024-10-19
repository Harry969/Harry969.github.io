// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Harry的个人博客',
  tagline: 'Dinosaurs are cool',
  favicon: 'https://github.com/Harry969.png',

  // Set the production url of your site here
  url: 'https://Harry969.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Harry969', // Usually your GitHub org/user name.
  projectName: 'Harry969.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    // 你可以继续添加其他插件
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'harry',   // 左上角标题
        logo: {             // 左上角logo
          alt: 'avatar',
          src: 'https://github.com/Harry969.png',
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          // { to: "/projects", label: "Projects", position: "left" },
          // { to: "/talks", label: "Talks", position: "left" },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Connect",
            items: [
              {
                label: "Email me",
                href: "mailto:tongque00@gamil.com",
              },
              // {
              //   label: "WeChat",
              //   to: "/",
              // },
              // {
              //   label: "QQGroup",
              //   to: "/",
              // },
            ],
          },
          {
            title: "Discover",
            items: [
              {
                label: "About me",
                to: "/",
              },
              // {
              //   label: "Projects",
              //   to: "/projects",
              // },
              // {
              //   label: "Talks",
              //   to: "/talks",
              // },
            ],
            },
            {
            title: "Friend Links",
            items: [
              // {
              //   label: "RSS",
              //   to: "pathname:///blog/rss.xml",
              // },
              // {
              //   label: "Atom",
              //   to: "pathname:///blog/atom.xml",
              // },
              {
                label: "tongque",
                to: "https://tongque0.github.io/",
              },
            ],
          },
        ],
        copyright: `Copyright © 2022-${new Date().getFullYear()} Tong Que.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
