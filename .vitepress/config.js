// @ts-check

const Guide = [
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
    text: 'Gravar a apresentação',
    link: '/guide/recording',
  },
  {
    text: 'Modo Apresentador',
    link: '/guide/presenter-mode',
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

const Theme = [
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

const Translations = [
  {
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
  },
]

const Customizations = [
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
    text: 'Configurar Windi CSS',
    link: '/custom/config-windicss',
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
    text: 'Configurar Atalhos',
    link: '/custom/config-shortcuts',
  },
  {
    text: 'Contexto Global do Vue',
    link: '/custom/vue-context',
  },
  {
    text: 'Camadas Globais',
    link: '/custom/global-layers',
  }
]

const Resources = [
  {
    text: 'Galeria',
    link: '/showcases',
  },
  {
<<<<<<< HEAD
    text: 'Capas Selecionadas',
=======
    text: 'Learning Resources',
    link: '/resources/learning',
  },
  {
    text: 'Curated Covers',
>>>>>>> 9ea35932b94caae076abe8c4e0df6914298d4ebe
    link: '/resources/covers',
  },
]

const slidebars = [
  {
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
  },
]

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
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
  themeConfig: {
    repo: 'slidevjs/docs',
    logo: '/logo.svg',
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
    },

    nav: [
      {
        text: 'Guia',
        items: Guide,
      },
      {
        text: 'Temas',
        items: Theme,
      },
      {
        text: 'Customizações',
        items: Customizations,
      },
      {
        text: 'Recursos',
        items: Resources,
      },
      {
        text: 'Português (BR)',
        items: Translations,
      },
    ],

    sidebar: {
      '/guide/': slidebars,
      '/themes/': slidebars,
      '/custom/': slidebars,
      '/builtin/': slidebars,
      '/resources/': slidebars,
      '/': slidebars,
    },
  },
}
