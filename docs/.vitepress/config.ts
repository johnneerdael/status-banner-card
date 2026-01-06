import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Lovelace Multi State Entities Card",
  description:
    "A flexible Home Assistant Lovelace card with banner design for displaying entity states",
  lang: "en-US",
  base: "/lovelace-multi-state-entities-card/",

  appearance: "dark",

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#41b883" }],
    ["meta", { name: "og:type", content: "website" }],
    [
      "meta",
      { name: "og:site_name", content: "Lovelace Multi State Entities Card" },
    ],
  ],

  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Multi State Entities Card",

    nav: [
      { text: "Guide", link: "/guide/introduction" },
      { text: "Blueprints", link: "/blueprints/" },
      { text: "Configuration", link: "/guide/configuration" },
      {
        text: "GitHub",
        link: "https://github.com/johnneerdael/lovelace-multi-state-entities-card",
      },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "Getting Started",
          items: [
            { text: "Introduction", link: "/guide/introduction" },
            { text: "Installation", link: "/guide/installation" },
            { text: "Quick Start", link: "/guide/quick-start" },
          ],
        },
        {
          text: "Configuration",
          items: [
            { text: "Basic Configuration", link: "/guide/configuration" },
            { text: "Rules & Matching", link: "/guide/rules-matching" },
            { text: "Template System", link: "/guide/templates" },
            { text: "Actions & Buttons", link: "/guide/actions" },
            { text: "Styling & Theming", link: "/guide/styling" },
          ],
        },
        {
          text: "Advanced",
          items: [
            { text: "Layout Variants", link: "/guide/layout-variants" },
            { text: "Troubleshooting", link: "/guide/troubleshooting" },
          ],
        },
      ],
      "/blueprints/": [
        {
          text: "Blueprint Library",
          items: [
            { text: "Overview", link: "/blueprints/" },
            { text: "Appliance Monitoring", link: "/blueprints/appliance" },
            { text: "Energy & EV", link: "/blueprints/energy" },
            { text: "Health & Safety", link: "/blueprints/health" },
            { text: "Home Automation", link: "/blueprints/home-automation" },
            { text: "Security", link: "/blueprints/security" },
            { text: "Lifestyle", link: "/blueprints/lifestyle" },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/johnneerdael/lovelace-multi-state-entities-card",
      },
    ],

    search: {
      provider: "local",
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present jneerdael",
    },

    editLink: {
      pattern:
        "https://github.com/johnneerdael/lovelace-multi-state-entities-card/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
  },

  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
  },
});
