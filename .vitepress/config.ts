import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'

const CURRENT_VERSION = '0.48.0-beta.2'

const Guide: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Por que Slidev',
    link: '/guide/why',
  },
  {
    text: 'Primeiros passos',
    link: '/guide/',
  },
  {
    text: 'Instalação',
    link: '/guide/install',
  },
  {
    text: 'Sintaxe do Markdown',
    link: '/guide/syntax',
  },
  {
    text: 'Navegação',
    link: '/guide/navigation',
  },
  {
    text: 'Animações',
    link: '/guide/animations',
  },
  {
    text: 'Exportando',
    link: '/guide/exporting',
  },
  {
    text: 'Hospedagem Estática',
    link: '/guide/hosting',
  },
  {
    text: 'Gravar a apresentação',
    link: '/guide/recording',
  },
  {
    text: 'Modo Apresentador',
    link: '/guide/presenter-mode',
  },
  {
    text: 'Desenhos e Anotações',
    link: '/guide/drawing',
  },
  {
    text: 'Integrações com o Editor',
    link: '/guide/editors',
  },
  {
    text: 'FAQ',
    link: '/guide/faq',
  },
]

const BuiltIn: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Components',
    link: '/builtin/components',
  },
  {
    text: 'Layouts',
    link: '/builtin/layouts',
  },
]

const Theme: (DefaultTheme.NavItemWithLink | DefaultTheme.NavItemChildren)[] = [
  {
    text: 'Usar um Tema',
    link: '/themes/use',
  },
  {
    text: 'Galeria de Temas',
    link: '/themes/gallery',
  },
  {
    text: 'Escrever um tema',
    link: '/themes/write-a-theme',
  },
]

const Addon: DefaultTheme.NavItemWithLink[] = [
  {
<<<<<<< HEAD:.vitepress/config.js
    text: 'Português (BR)',
  },
  {
    text: 'English',
    link: 'https://sli.dev{{pathname}}',
  },
  {
    text: '简体中文',
    link: 'https://cn.sli.dev{{pathname}}',
  },
  {
    text: 'Français',
    link: 'https://fr.sli.dev{{pathname}}',
  },
  {
    text: 'Español',
    link: 'https://es.sli.dev{{pathname}}',
  },
  {
    text: 'Русский',
    link: 'https://ru.sli.dev{{pathname}}',
  },
  {
    text: 'Việt Nam',
    link: 'https://vn.sli.dev{{pathname}}',
  },
  {
    text: 'Deutsch',
    link: 'https://de.sli.dev{{pathname}}',
  },
  {
    text: 'Ελληνικά',
    link: 'https://el.sli.dev{{pathname}}',
=======
    text: 'Use Addon',
    link: '/addons/use',
  },
  {
    text: 'Write an Addon',
    link: '/addons/write-an-addon',
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280:.vitepress/config.ts
  },
]

const Customizations: (DefaultTheme.NavItemWithLink | DefaultTheme.NavItemChildren)[] = [
  {
    text: 'Customizações',
    link: '/custom/',
  },
  {
    text: 'Estrutura de Diretório',
    link: '/custom/directory-structure',
  },
  {
    text: 'Fontes',
    link: '/custom/fonts',
  },
  {
    text: 'Destacadores',
    link: '/custom/highlighters',
  },
  {
    text: 'Configurar Vue',
    link: '/custom/config-vue',
  },
  {
    text: 'Configurar Vite',
    link: '/custom/config-vite',
  },
  {
<<<<<<< HEAD:.vitepress/config.js
    text: 'Configurar Windi CSS',
    link: '/custom/config-windicss',
=======
    text: 'Configure UnoCSS',
    link: '/custom/config-unocss',
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280:.vitepress/config.ts
  },
  {
    text: 'Configurar Monaco',
    link: '/custom/config-monaco',
  },
  {
    text: 'Configurar KaTeX',
    link: '/custom/config-katex',
  },
  {
    text: 'Configurar Mermaid',
    link: '/custom/config-mermaid',
  },
  {
<<<<<<< HEAD:.vitepress/config.js
    text: 'Configurar Atalhos',
=======
    text: 'Configure Parser',
    link: '/custom/config-parser',
  },
  {
    text: 'Configure Shortcuts',
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280:.vitepress/config.ts
    link: '/custom/config-shortcuts',
  },
  {
    text: 'Contexto Global do Vue',
    link: '/custom/vue-context',
  },
  {
    text: 'Camadas Globais',
    link: '/custom/global-layers',
  },
]

const Resources: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Galeria',
    link: '/showcases',
  },
  {
    text: 'Recursos de Aprendizagem',
    link: '/resources/learning',
  },
  {
    text: 'Capas Selecionadas',
    link: '/resources/covers',
  },
]

const slidebars: DefaultTheme.SidebarItem[] = [
  {
<<<<<<< HEAD:.vitepress/config.js
    text: 'Guia',
    children: Guide,
  },
  {
    text: 'Temas',
    children: Theme,
  },
  {
    text: 'Customizações',
    children: Customizations,
  },
  {
    text: 'Integrado',
    children: [
      {
        text: 'Componentes',
        link: '/builtin/components',
      },
      {
        text: 'Layouts',
        link: '/builtin/layouts',
      },
    ],
=======
    text: 'Guide',
    items: Guide,
  },
  {
    text: 'Themes',
    items: Theme,
  },
  {
    text: 'Addons',
    items: Addon,
  },
  {
    text: 'Customizations',
    items: Customizations,
  },
  {
    text: 'Built-in',
    items: BuiltIn,
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280:.vitepress/config.ts
  },
]

export default defineConfig({
  title: 'Slidev',
  description: 'Apresentação de slides para desenvolvedores',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'author', content: 'Anthony Fu' }],
    ['meta', { property: 'og:title', content: 'Slidev' }],
    ['meta', { property: 'og:image', content: 'https://sli.dev/og-image.png' }],
    ['meta', { property: 'og:description', content: 'Apresentação de slides para desenvolvedores' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@slidevjs' }],
    ['meta', { name: 'twitter:image', content: 'https://sli.dev/og-image.png' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600', rel: 'stylesheet' }],
  ],
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    async shikiSetup(shiki) {
      await shiki.loadLanguage(
        'html',
        'xml',
        'vue',
        'markdown',
      )
    },
    codeTransformers: [
      transformerTwoslash(),
    ],
  },
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.svg',
<<<<<<< HEAD:.vitepress/config.js
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Sugerir mudanças à essa página',

    algolia: {
      apiKey: '1a5c5a504139c58f428974c78c55291d',
      indexName: 'slidev',
      searchParameters: {
        // for translations maintainers: change the filter to your locale code (subdomain name)
        facetFilters: ['language:br']
      }
=======
    editLink: {
      pattern: 'https://github.com/slidevjs/docs/edit/main/:path',
      text: 'Suggest changes to this page',
    },

    search: {
      provider: 'local',
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280:.vitepress/config.ts
    },

    nav: [
      {
        text: 'Guia',
        items: Guide,
      },
      {
<<<<<<< HEAD:.vitepress/config.js
        text: 'Temas',
        items: Theme,
      },
      {
        text: 'Customizações',
        items: Customizations,
=======
        text: 'Theme',
        items: [
          ...Theme,
          {
            text: 'Built-in',
            items: BuiltIn,
          },
        ],
      },
      {
        text: 'Customize',
        items: [
          ...Customizations,
          {
            text: 'Addon',
            items: Addon,
          },
        ],
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280:.vitepress/config.ts
      },
      {
        text: 'Recursos',
        items: Resources,
      },
      {
<<<<<<< HEAD:.vitepress/config.js
        text: 'Português (BR)',
        items: Translations,
=======
        text: `v${CURRENT_VERSION}`,
        items: [
          { text: 'Release Notes', link: 'https://github.com/slidevjs/slidev/releases' },
        ],
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280:.vitepress/config.ts
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/slidevjs/slidev' },
      { icon: 'twitter', link: 'https://twitter.com/slidevjs' },
      { icon: 'discord', link: 'https://chat.sli.dev' },
    ],

    sidebar: {
      '/guide/': slidebars,
      '/themes/': slidebars,
      '/addons/': slidebars,
      '/custom/': slidebars,
      '/builtin/': slidebars,
      '/resources/': slidebars,
      '/': slidebars,
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020 Anthony Fu.',
    },
  },

  locales: {
    root: {
      label: 'English',
    },
    zh: {
      label: '简体中文',
      link: 'https://cn.sli.dev/',
    },
    fr: {
      label: 'Français',
      link: 'https://fr.sli.dev/',
    },
    es: {
      label: 'Español',
      link: 'https://es.sli.dev/',
    },
    ru: {
      label: 'Русский',
      link: 'https://ru.sli.dev/',
    },
    vn: {
      label: 'Việt Nam',
      link: 'https://vn.sli.dev/',
    },
    de: {
      label: 'Deutsch',
      link: 'https://de.sli.dev/',
    },
    br: {
      label: 'Português (BR)',
      link: 'https://br.sli.dev/',
    },
    el: {
      label: 'Ελληνικά',
      link: 'https://el.sli.dev/',
    },
    ja: {
      label: '日本語',
      link: 'https://ja.sli.dev/',
    },
  },
})
