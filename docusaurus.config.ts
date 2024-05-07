import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const config: Config = {
  title: "Tech Labs",
  tagline: "Tech Labs",
  favicon: "img/favicon.ico",
  url: "https://EliFuzz.github.io",
  baseUrl: "/tech-labs/",
  projectName: "EliFuzz.github.io",
  organizationName: "EliFuzz",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  deploymentBranch: "main",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/EliFuzz/tech-labs",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: "./src/css/custom.scss",
        },
      } satisfies Preset.Options,
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Tech Labs",
      logo: {
        alt: "Tech Labs Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          sidebarId: "study",
          label: "🎓 Study",
          position: "left",
          items: [
            {
              sidebarId: "roadmap",
              type: "docSidebar",
              label: "🎯 Roadmap",
            },
            {
              sidebarId: "education",
              type: "docSidebar",
              label: "📖 Education",
            },
            {
              sidebarId: "preparation",
              type: "docSidebar",
              label: "👔 Preparation",
            },
          ],
        },
        {
          label: "🧬 Toolset",
          href: "/toolset",
          position: "left",
        },
        {
          href: "https://github.com/EliFuzz",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["java"],
    },
    mermaid: {
      theme: { light: "neutral", dark: "forest" },
      options: {
        fontfamily:
          "'JetBrains Mono', 'Fira Code Medium', 'Source Code Pro', monospace",
        fontSize: 18,
      },
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    algolia: {
      apiKey: "f15e354dfc29b7f627e66d2ff97889a3",
      appId: "W90HZ26JR6",
      contextualSearch: true,
      indexName: "elifuzzio",
    },
  } satisfies Preset.ThemeConfig,
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  plugins: ["docusaurus-plugin-sass"],
};

export default config;
