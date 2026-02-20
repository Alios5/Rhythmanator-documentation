import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RhythmNator Editor",
  description: "RhythmNator Editor Documentation",

  // Base URL pour GitHub Pages (format: /nom-du-repo/)
  base: '/Rhythmanator-documentation/',

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Documentation', link: '/intro' }
        ],

        sidebar: [
          {
            text: 'Introduction',
            items: [
              { text: 'Overview', link: '/intro' },
              { text: 'Getting Started', link: '/getting-started' }
            ]
          },
          {
            text: 'Interface',
            items: [
              { text: 'Interface Overview', link: '/interface' },
              { text: 'Home Screen', link: '/interface-home' },
              { text: 'Editor', link: '/interface-editor' }
            ]
          },
          {
            text: 'Guides',
            items: [
              { text: 'Project Launch', link: '/guide-launch' },
              { text: 'Project Management', link: '/guide-project-management' },
              { text: 'Audio & BPM', link: '/guide-bpm' },
              { text: 'Work Area (Track)', link: '/guide-sheet' },
              { text: 'Notes', link: '/guide-event-keys' },
              { text: 'Groups', link: '/guide-groups' },
              { text: 'Actions', link: '/guide-actions' }
            ]
          }
        ]
      }
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/fr/' },
          { text: 'Documentation', link: '/fr/intro' }
        ],

        sidebar: [
          {
            text: 'Introduction',
            items: [
              { text: 'Présentation', link: '/fr/intro' },
              { text: 'Premiers pas', link: '/fr/getting-started' }
            ]
          },
          {
            text: 'Interface',
            items: [
              { text: 'Vue d\'ensemble', link: '/fr/interface' },
              { text: 'Écran d\'accueil', link: '/fr/interface-home' },
              { text: 'Éditeur', link: '/fr/interface-editor' }
            ]
          },
          {
            text: 'Guides',
            items: [
              { text: 'Lancer un projet', link: '/fr/guide-launch' },
              { text: 'Gestion de projet', link: '/fr/guide-project-management' },
              { text: 'Audio & BPM', link: '/fr/guide-bpm' },
              { text: 'Espace de travail (Piste)', link: '/fr/guide-sheet' },
              { text: 'Notes', link: '/fr/guide-event-keys' },
              { text: 'Groupes', link: '/fr/guide-groups' },
              { text: 'Actions', link: '/fr/guide-actions' }
            ]
          }
        ],

        docFooter: {
          prev: 'Page précédente',
          next: 'Page suivante'
        },

        outline: {
          label: 'Sur cette page'
        },

        returnToTopLabel: 'Retour en haut',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Apparence'
      }
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Alios5/Rhythmanator-documentation' }
    ],

    footer: {
      message: 'RhythmNator Editor Documentation',
      copyright: '© 2026 Rhythmanator'
    },

    search: {
      provider: 'local'
    }
  }
})
