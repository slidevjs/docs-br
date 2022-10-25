# Customizações

O Slidev é totalmente customizável, desde estilização até configurações de ferramentas. Ele te permite configurar as ferramentas por trás ([Vite](/custom/config-vite), [Windi CSS](/custom/config-windicss), [Monaco](/custom/config-monaco), etc.)

## Configurações do Frontmatter

Você pode configurar o Slidev no frontmatter do seu primeiro slide, abaixo é mostrado os valores padrão para cada opção.

```yaml
---
<<<<<<< HEAD
# id fo tema ou nome do módulo
theme: 'default'
# título do seu slide, será automaticamente inferido do primeiro header se não for espeecificado
title: ''
# titleTemplate para a página web, `%s` será substituído pelo título da página
=======
# theme id or package name
# Learn more: https://sli.dev/themes/use.html
theme: 'default'
# title of your slide, will auto infer from the first header if not specified
title: 'Slidev'
# titleTemplate for the webpage, `%s` will be replaced by the page's title
>>>>>>> 37da379f2085eaf0e279e3b3929565606e0df481
titleTemplate: '%s - Slidev'
# information for your slides, can be a markdown string
info: false

<<<<<<< HEAD
# habilita o download em PDF na SPA compilada, também pode ser uma url customizada
download: true
# destacador de sintaxe, pode ser 'prism' ou 'shiki'
=======
# enabled pdf downloading in SPA build, can also be a custom url
download: false
# filename of the export file
exportFilename: 'slidev-exported'
# syntax highlighter, can be 'prism' or 'shiki'
>>>>>>> 37da379f2085eaf0e279e3b3929565606e0df481
highlighter: 'prism'
# mostra o número das linhas nos blocos de código 
lineNumbers: false
<<<<<<< HEAD
# habilita o editor monaco, por padrão é só no dev
=======
# enable monaco editor, can be boolean, 'dev' or 'build'
>>>>>>> 37da379f2085eaf0e279e3b3929565606e0df481
monaco: 'dev'
# download remote assets in local using vite-plugin-remote-assets, can be boolean, 'dev' or 'build'
remoteAssets: false
# controls whether texts in slides are selectable
selectable: true
# enable slide recording, can be boolean, 'dev' or 'build'
record: 'dev'

<<<<<<< HEAD
# força um esquema de cor aos slides, pode ser 'auto', 'light' ou 'dark'
colorSchema: 'auto'
# modo de roteamento para o vue-router, pode ser 'history' ou 'hash'
=======
# force color schema for the slides, can be 'auto', 'light', or 'dark'
colorSchema: 'auto'
# router mode for vue-router, can be "history" or "hash"
>>>>>>> 37da379f2085eaf0e279e3b3929565606e0df481
routerMode: 'history'
# proporção da tela para os slides
aspectRatio: '16/9'
# largura real da tela, unidade em px
canvasWidth: 980
# used for theme customization, will inject root styles as `--slidev-theme-x` for attribute `x`
themeConfig:
  primary: '#5d8392'

<<<<<<< HEAD
# fontes serão automaticamente importadas do Google fonts
# Saiba mais: https://sli.dev/custom/fonts
=======
# favicon, can be a local file path or URL
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
# URL of PlantUML server used to render diagrams
plantUmlServer: 'https://www.plantuml.com/plantuml'
# fonts will be auto imported from Google fonts
# Learn more: https://sli.dev/custom/fonts
>>>>>>> 37da379f2085eaf0e279e3b3929565606e0df481
fonts:
  sans: 'Roboto'
  serif: 'Roboto Slab'
  mono: 'Fira Code'

# frontmatter padrão aplicado para todos os slides
defaults:
  layout: 'default'
  # ...

<<<<<<< HEAD
# informações para seus slides, pode ser uma string em markdown
info: |
  ## Slidev
  Minha primeira apresentação com o [Slidev](http://sli.dev/)!
=======
# drawing options
# Learn more: https://sli.dev/guide/drawing.html
drawings:
  enabled: true
  persist: false
  presenterOnly: false
  syncAll: true
>>>>>>> 37da379f2085eaf0e279e3b3929565606e0df481
---
```

Vejas as [definições de tipos](https://github.com/slidevjs/slidev/blob/main/packages/types/src/config.ts) para mais opções.

## Estrutura de Diretório

O Slidev emprega algumas convenções de estrutura de diretório para minimizar a superfície de configuração e tornar as extensões das funcionalidades flexíveis e intuitivas.

Consulte a seção [Estrutura de Diretório](/custom/directory-structure).

## Configurar Ferramentas

- [Destacadores](/custom/highlighters)
- [Configurar Vue](/custom/config-vue)
- [Configurar Vite](/custom/config-vite)
- [Configurar Windi CSS](/custom/config-windicss)
- [Configurar Monaco](/custom/config-monaco)
- [Configurar KaTeX](/custom/config-katex)
- [Configurar Mermaid](/custom/config-mermaid)
