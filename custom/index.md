# Customizações

O Slidev é totalmente customizável, desde estilização até configurações de ferramentas. Ele te permite configurar as ferramentas por trás ([Vite](/custom/config-vite), [Windi CSS](/custom/config-windicss), [Monaco](/custom/config-monaco), etc.)

## Configurações do Frontmatter

Você pode configurar o Slidev no frontmatter do seu primeiro slide, abaixo é mostrado os valores padrão para cada opção.

```yaml
---
# id fo tema ou nome do módulo
theme: 'default'
# título do seu slide, será automaticamente inferido do primeiro header se não for espeecificado
title: ''
# titleTemplate para a página web, `%s` será substituído pelo título da página
titleTemplate: '%s - Slidev'

# habilita o download em PDF na SPA compilada, também pode ser uma url customizada
download: true
# destacador de sintaxe, pode ser 'prism' ou 'shiki'
highlighter: 'prism'
# habilita o editor monaco, por padrão é só no dev
monaco: 'dev'

# força um esquema de cor aos slides, pode ser 'auto', 'light' ou 'dark'
colorSchema: 'auto'
# modo de roteamento para o vue-router, pode ser 'history' ou 'hash'
routerMode: 'history'
# proporção da tela para os slides
aspectRatio: '16/9'
# largura real da tela, unidade em px
canvasWidth: 980

# fontes serão automaticamente importadas do Google fonts
# Saiba mais: https://sli.dev/custom/fonts
fonts:
  sans: 'Roboto'
  serif: 'Roboto Slab'
  mono: 'Fira Code'

# frontmatter padrão aplicado para todos os slides
defaults:
  layout: 'default'
  # ...

# informações para seus slides, pode ser uma string em markdown
info: |
  ## Slidev
  Minha primeira apresentação com o [Slidev](http://sli.dev/)!
---
```

Vejas as [definições de tipos](https://github.com/slidevjs/slidev/blob/main/packages/types/src/types.ts#L29) para mais opções.

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
