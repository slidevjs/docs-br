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

const Addon = [
  {
    text: 'Use Addon',
    link: '/addons/use',
  },
  {
    text: 'Write an Addon',
    link: '/addons/write-an-addon',
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
  {
    text: '日本語',
    link: 'https://ja.sli.dev{{pathname}}',
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
<<<<<<< HEAD
    text: 'Configurar Windi CSS',
=======
    text: 'Configure UnoCSS',
    link: '/custom/config-unocss',
  },
  {
    text: 'Configure Windi CSS',
>>>>>>> c608c011ffbff72d267a0c074a4bfa5ff4b601a7
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
<<<<<<< HEAD
    text: 'Configurar Atalhos',
=======
    text: 'Configure Parser',
    link: '/custom/config-parser',
  },
  {
    text: 'Configure Shortcuts',
>>>>>>> c608c011ffbff72d267a0c074a4bfa5ff4b601a7
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

const BuiltIn = [
  {
    text: 'Components',
    link: '/builtin/components',
  },
  {
    text: 'Layouts',
    link: '/builtin/layouts',
  },
]

const Resources = [
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
<<<<<<< HEAD
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
    text: 'Addons',
    children: Addon,
  },
  {
    text: 'Customizations',
    children: Customizations,
  },
  {
    text: 'Built-in',
    children: BuiltIn,
>>>>>>> c608c011ffbff72d267a0c074a4bfa5ff4b601a7
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
      appId: 'LCBV6MIFS6',
      apiKey: '1ff173fe73b20edc962c1c24c0b1c160',
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
<<<<<<< HEAD
        text: 'Customizações',
        items: Customizations,
      },
      {
        text: 'Recursos',
=======
        text: 'Addon',
        items: Addon,
      },
      {
        text: 'Customize',
        items: Customizations,
      },
      {
        text: 'Built-in',
        items: BuiltIn,
      },
      {
        text: 'Resources',
>>>>>>> c608c011ffbff72d267a0c074a4bfa5ff4b601a7
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
      '/addons/': slidebars,
      '/custom/': slidebars,
      '/builtin/': slidebars,
      '/resources/': slidebars,
      '/': slidebars,
    },
  },
}
