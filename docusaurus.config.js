// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Survival-Pi',
  tagline: 'Whitelisted Semi-Vanilla SMP focused on building, Redstone, and community.',
  favicon: 'img/logo.ico',

  // Set the production url of your site here
  url: 'https://survival-pi.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aleabodo', // Usually your GitHub org/user name.
  projectName: 'survival-pi-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
          'https://github.com/aleabodo/survival-pi-docs/tree/main'
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // The application ID provided by Algolia
        appId: '54SN3WDSZ2',
  
        // Public API key: it is safe to commit it
        apiKey: 'ea64f7234545abe12373c633bc9ffc33',
  
        indexName: 'survival-pi',
  
        // Optional: see doc section below
        contextualSearch: false,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        //externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        //replaceSearchResultPathname: {
        //  from: '/docs/', // or as RegExp: /\/docs\//
        //  to: '/',
        //},
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,
  
        //... other Algolia params
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Survival-Pi',
        logo: {
          alt: 'Survival-Pi Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'documentationSidebar',
            position: 'left',
            label: 'Wiki',
          },
          {
            type: 'docSidebar',
            sidebarId: 'season1Sidebar',
            position: 'left',
            label: 'Season 1',
          },
          {
            type: 'docSidebar',
            sidebarId: 'season2Sidebar',
            position: 'left',
            label: 'Season 2',
          },
          {
            type: 'dropdown',
            label: 'Dynmap',
            position: 'left',
            items: [
              {
                to: '/dynmap_smp',
                label: 'SMP'
              },
              {
                to: '/dynmap_creative',
                label: 'Creative'
              }
            ],
          },
          {
            type: 'docSidebar',
            sidebarId: 'donate',
            position: 'left',
            label: 'Donate'
          },
          {
            href: 'https://github.com/aleabodo/survival-pi-docs',
            label: 'GitHub',
            position: 'right',
          },
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'About the server',
                to: '/docs/wiki/about',
              },
              {
                label: 'Tutorials',
                to: '/docs/wiki/about',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Tebex Store',
                href: 'https://survival-pi.tebex.io/',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/WKAtDzEu24',
              },
              {
                label: 'Planetminecraft',
                href: 'https://www.planetminecraft.com/server/survival-pi-smp/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/aleabodo/survival-pi-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Survival-Pi community members.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
