module.exports = {
  title: 'P2PAL Documentation',
  tagline: 'Your P2PAL Documentation',
  url: 'https://docs.p2pal.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/p2pal-logo.png',
  
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/p2pal-graphic.jpg',
    metadata: [
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:image', content: 'https://docs.p2pal.io/img/P2PAL-Twitter-Graphic.jpg'},
      {name: 'twitter:title', content: 'P2PAL Documentation'},
      {name: 'twitter:description', content: 'Your P2PAL Documentation'},
    ],
    
    
    navbar: {
      title: 'P2PAL',
      logo: {
        alt: 'P2PAL Logo',
        src: 'img/p2pal-logo.png',
      },
      items: [],
      hideOnScroll: false,
    },
    
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },
    
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} P2PAL.`,
    },
    
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
    },
  },
};