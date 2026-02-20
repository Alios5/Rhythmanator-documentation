import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rhythmanator",
  description: "Documentation du projet Rhythmanator",

  // Base URL pour GitHub Pages (format: /nom-du-repo/)
  base: '/Rhythmanator-documentation/',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Guide', link: '/guide/introduction' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/introduction' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Alios5/Rhythmanator-documentation' }
    ],

    footer: {
      message: 'Documentation Rhythmanator',
      copyright: '© 2026 Rhythmanator'
    },

    search: {
      provider: 'local'
    }
  }
})
