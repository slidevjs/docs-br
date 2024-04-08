<<<<<<< HEAD
# Sintaxe do Markdown

Os slides são escritos em **um único arquivo markdown** (por padrão `./slides.md`).

Você pode usar [os recursos do Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) normalmente, com suporte adicional de HTML *inline* e Componentes do Vue. Estilização usando o [Windi CSS](https://windicss.org) também é suportada. Use `---` seguido de uma nova linha para separar seus slides.
=======
---
outline: deep
---

# Markdown Syntax

Slides are written within **a single markdown file** (by default `./slides.md`).

You can use [the Markdown features](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) as you normally would, with the additional support of inlined HTML and Vue Components. Styling using [UnoCSS](/custom/config-unocss) is also supported. Use `---` padded with a new line to separate your slides.
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

````md
# Slidev

Olá, Mundo!

---

# Página 2

Use blocos de código diretmente para ter destaque na sintaxe

<<<<<<< HEAD
//```ts
console.log('Olá, Mundo!')
//```
=======
```ts
console.log('Hello, World!')
```
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

---

# Página 3

Você pode usar o Windi CSS e componentes Vue diretamente para estilizar e enriquecer seus slides.

<div class="p-3">
  <Tweet id="20" />
</div>
````

## Frontmatter & Layouts

<<<<<<< HEAD
Especifique layouts e outros metadados para cada slide convertendo os separadores em [blocos front matter](https://jekyllrb.com/docs/front-matter/). Cada frontmatter começa e termina com três traços (`---`). Os textos entre os traços são dados no formato [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started/). Por exemplo:
=======
Specify layouts and other metadata for each slide by converting the separators into [frontmatter blocks](https://jekyllrb.com/docs/front-matter/). Each frontmatter starts with a triple-dash and ends with another. Texts between them are data objects in [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started/) format. For example:
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

<!-- eslint-skip -->

```md
---
layout: cover
---

# Slidev

Esta é a página capa.

---
layout: center
background: './images/background-1.png'
class: 'text-white'
---

# Página 2

Esta é uma página com o layout `center` e uma imagem de fundo.

---

# Página 3

<<<<<<< HEAD
Está pe uma página padrão sem nenhum metadado adicional.
~~~
=======
This is a default page without any additional metadata.
```
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

Dê uma olhada em [customização](/custom/) para mais detalhes.

<<<<<<< HEAD
## Blocos de Código
=======
### Prettier Support

> Available since v0.44

The custom syntax might not be compactible with some formatters like Prettier.
You can either install the [Prettier Plugin](/guide/editors#prettier-plugin) or use a direct `yaml` code block to define the frontmatter instead:

````md
---
layout: cover
---

# Slidev

This is the cover page.

---

```yaml
# The first yaml block will be treated as the frontmatter of that slide
layout: center
background: './images/background-1.png'
class: 'text-white'
```

# Page 2

This is a page with the layout `center` and a background image.
````

## Code Blocks
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

Um grande motivo pelo qual eu estou desenvolvendo o Slidev é a necessidade de fazer meu código aparecer perfeitamente nos slides. Então como você deve estar pensando, você pode usar blocos de código no estilo do Markdown para destacar seu código.

<<<<<<< HEAD
~~~ts
//```ts
console.log('Olá, Mundo!')
//```
~~~

Nós suportamos o [Prism](http://prismjs.com) e o [Shiki](https://github.com/shiki/shiki) como destacadores de sintaxe. Consulte [a seção de destacadores](/custom/highlighters) para mais detalhes.
=======
````md
```ts
console.log('Hello, World!')
```
````

We support [Prism](https://prismjs.com), [Shiki](https://github.com/shikijs/shiki) as syntax highlighters. Refer to [the highlighters section](/custom/highlighters) for more details.
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

### Realce de Linha

<<<<<<< HEAD
Para realçar linhas específicas, simplesmente adicione o número das linhas em chaves `{}`. A contagem do número das linhas começa a partir do 1.
=======
To highlight specific lines, simply add line numbers within bracket `{}`. Line numbers start counting from 1 by default.
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

````md
```ts {2,3}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
````

<<<<<<< HEAD
Para definir os realces em vários passos, você pode usar `|` para separá-los. Por exemplo:
=======
You can enable line number to all slides by setting `lineNumbers: true` on the config or enable each code block individually by setting `lines: true`. You can also set the starting line for each code block and highlight the lines accordingly, defaults to 1:
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

````md
```ts {6,7}{lines:true,startLine:5}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
````

<<<<<<< HEAD
Isto vai primeiro realçar `a: Ref<number> | number` e `b: Ref<number> | number`, aí `return computed(() => unref(a) + unref(b))` após um clique, e por último, o bloco inteiro. Aprenda mais no [guia de animações no clique](/guide/animations#animacoes-no-clique).
=======
To change the highlight in multiple clicks, you can use `|` to separate them:

````md
```ts {2-3|5|all}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
````

This will first highlight `a: Ref<number> | number` and `b: Ref<number> | number`, and then `return computed(() => unref(a) + unref(b))` after one click, and lastly, the whole block.

You can set the line number to `hide` to hide the code block or `none` to not highlight any line:

````md
```ts {hide|none}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
````

::: tip
Learn more in the [clicks animations guide](./animations#positioning).
:::

If the code doesn't fit into one slide, you use the `maxHeight` to set fixed height and enable scrolling:

````md
```ts {2|3|7|12}{maxHeight:'100px'}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
/// ...as many lines as you want
const c = add(1, 2)
```
````

### TwoSlash Integration

> Available since v0.46

This feature is only available when you [set `highlighter` to `shiki`](/custom/highlighters)

[TwoSlash](https://twoslash.netlify.app/) is a powerful tool for rendering TypeScript code blocks with type information on hover or inlined. It's quite useful for preparing slides for JavaScript/TypeScript-related topics.

To use it, you can add `twoslash` to the code block's language identifier:

````md
```ts twoslash
import { ref } from 'vue'

const count = ref(0)
//            ^?
```
````

It will be rendered as:

```ts twoslash
import { ref } from 'vue'

const count = ref(0)
//            ^?
```

<!-- For the popup to not to overlap the content below -->
<div class="py-20" />

### Shiki Magic Move

> Available since v0.48

[Shiki Magic Move](https://github.com/shikijs/shiki-magic-move) enables you to have granular transition between code changes, similar to Keynote's Magic Move. You can check [the playground](https://shiki-magic-move.netlify.app/) to see how it works.

In Slidev, we bind it to the [clicks system](/guide/animations#click-animations). The syntax is wrap multiple code blocks representing each steps with <code>````md magic-move</code> (mind it's **4** backticks), this will be transformed into one code block, that morphing to each steps as you click.

`````md
````md magic-move
```js
console.log(`Step ${1}`)
```
```js
console.log(`Step ${1 + 1}`)
```
```ts
console.log(`Step ${3}` as string)
```
````
`````

It's also possible mix Magic Move with [line highlighting](#line-highlighting), for example:

`````md
````md magic-move {at:4} // [!code hl]
```js {*|1|2-5} // [!code hl]
let count = 1
function add() {
  count++
}
```

Non-code blocks in between as ignored, you can put some comments.

```js
let count = 1
const add = () => count += 1
```
````
`````

<!-- TODO: add an inline demo -->
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

### Editor Monaco

Sempre que quiser fazer alguma modificação na apresentação, simplesmente adicione `{monaco}` após o id da linguagem — isto transforma o bloco em um editor Monaco com todos os seus recursos!

<<<<<<< HEAD
~~~ts
//```ts {monaco}
console.log('OláMundo')
//```
~~~
=======
````md
```ts {monaco}
console.log('HelloWorld')
```
````
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

Aprenda mais sobre [configurar Monaco](/custom/config-monaco).

<<<<<<< HEAD
## Estilos Embutidos
=======
#### Monaco Diff

Monaco can also generate a diff between two code blocks. Use `{monaco-diff}` to turn the block into a [diff Monaco editor](https://microsoft.github.io/monaco-editor/playground.html?source=v0.36.1#example-creating-the-diffeditor-multi-line-example) and use `~~~` to separate both original and modified version of the code!

````md
```ts {monaco-diff}
This line is removed on the right.
just some text
abcd
efgh
Some more text
~~~
just some text
abcz
zzzzefgh
Some more text.
This line is removed on the left.
```
````

## Embedded Styles
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

Você pode usar a tag `<style>` diretamente no seu Markdown para sobrepor estilos no **slide atual**.

```md
# Isso está Vermelho

<style>
h1 {
  color: red
}
</style>

---

# O próximo slide não é afetado
```

<<<<<<< HEAD
A tag `<style>` no Markdown sempre segue um [escopo](https://vue-loader.vuejs.org/guide/scoped-css.html). Para redefinir estilos globalmente, dá uma olhada na [seção de customização](/custom/directory-structure#estilo).

Graças ao [Windi CSS](https://windicss.org), você pode usar aninhamento de CSS diretamente, além de [diretrizes](https://windicss.org/features/directives.html) (e.g. `@apply`).
=======
`<style>` tag in Markdown is always [scoped](https://vuejs.org/api/sfc-css-features.html#scoped-css). As an outstanding result, a selector with the child combinator (`.a > .b`) is unusable as such; see the previous link. To have global style overrides, check out the [customization section](/custom/directory-structure#style).

Powered by [UnoCSS](/custom/config-unocss), you can directly use nested css and [directives](https://unocss.dev/transformers/directives) (e.g. `--uno:` or `@apply`)
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

```md
# Slidev

> Olá `mundo`

<style>
blockquote {
  code {
    --uno: text-teal-500 dark:text-teal-400;
  }
}
</style>
```

## Recursos Estáticos

Assim como você faria no markdown, você pode usar imagens apontando para uma URL remota ou local.

Para recursos estáticos, o [`vite-plugin-remote-assets`](https://github.com/antfu/vite-plugin-remote-assets) embutido vai criar um cache na memória na primeira execução para que você possa ter o carregamento instantâneo depois, até pra imagens maiores.

```md
![Imagem Remota](https://sli.dev/favicon.png)
```

Para recursos locais, os coloque na [pasta `public`](/custom/directory-structure.html#publico) e depois a referencie com uma **barra no início**.

```md
![Imagem Local](/foto.png)
```

<<<<<<< HEAD
Se quiser aplicar tamanhos ou estilos customizados, você pode converter para uma tag `<img>`
=======
For you want to apply custom sizes or styles, you can convert them to the `<img>` tag
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

```html
<img src="/foto.png" class="m-40 h-40 rounded shadow" />
```

## Notas

Você também pode fazer anotações em cada slide. Elas aparecerão no [Modo Apresentador](/guide/presenter-mode) para que você possa usá-las como referência durante apresentações.

Em Markdown, o último bloco de comentário em cada slide será considerado uma nota.

```md
---
layout: cover
---

# Página 1

Esta é a página de capa.

<!-- Isto é uma nota -->

---

# Página 2

<!-- Isto NÃO é uma nota porque vem antes do conteúdo do slide -->

A segunda página

<!--
Isto é outra nota
-->
```

Basic Markdown and HTML are also supported in notes on Presenter renderering.

### Click Markers

> Available since v0.48

For some slides you might have longer notes that might be hard to find where you are looking at, we introduced the click markers that allows highlighting and auto-scrolling to the section of notes of your corresponding content. Put `[click]` markers in your notes for the timming you need to go to another [click](/guide/animations#click-animations), Slidev divide the content between the click markers and highlight them in presenter notes, synchronized with your slide progress.

<!-- TODO: add a video -->

## Ícones

<<<<<<< HEAD
O Slidev te permite acessar quase todos os conjutos de ícones open-source **diretamente** no seu markdown. Graças ao [`vite-plugin-icons`](https://github.com/antfu/vite-plugin-icons) e ao [Iconify](https://iconify.design/).
=======
Slidev allows you to have the accessing to almost all the popular open-source iconsets **directly** in your markdown after installing the corresponding package. Powered by [`unplugin-icons`](https://github.com/antfu/unplugin-icons) and [Iconify](https://iconify.design/).
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

Os nomes seguem a convenção do [Iconify](https://iconify.design/) `{nome-da-coleção}-{nome-do-icone}`. Por exemplo:

<<<<<<< HEAD
- `<mdi-account-circle />` - <mdi-account-circle /> do [Material Design Icons](https://github.com/Templarian/MaterialDesign)
- `<carbon-badge />` - <carbon-badge /> do [Carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/icons)
- `<uim-rocket />` - <uim-rocket /> do [Unicons Monochrome](https://github.com/Iconscout/unicons)
- `<twemoji-cat-with-tears-of-joy />` - <twemoji-cat-with-tears-of-joy /> do [Twemoji](https://github.com/twitter/twemoji)
- `<logos-vue />` - <logos-vue /> do [SVG Logos](https://github.com/gilbarbara/logos)
- E muito mais...
=======
- `<mdi-account-circle />` - <mdi-account-circle /> from [Material Design Icons](https://github.com/Templarian/MaterialDesign) - [`@iconify-json/mdi`](https://npmjs.com/package/@iconify-json/mdi)
- `<carbon-badge />` - <carbon-badge /> from [Carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/icons) - [`@iconify-json/carbon`](https://npmjs.com/package/@iconify-json/carbon)
- `<uim-rocket />` - <uim-rocket /> from [Unicons Monochrome](https://github.com/Iconscout/unicons) - [`@iconify-json/uim`](https://npmjs.com/package/@iconify-json/uim)
- `<twemoji-cat-with-tears-of-joy />` - <twemoji-cat-with-tears-of-joy /> from [Twemoji](https://github.com/twitter/twemoji) - [`@iconify-json/twemoji`](https://npmjs.com/package/@iconify-json/twemoji)
- `<logos-vue />` - <logos-vue /> from [SVG Logos](https://github.com/gilbarbara/logos) - [`@iconify-json/logos`](https://npmjs.com/package/@iconify-json/logos)
- And much more...
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

Navegue e pesquise por todos os ícones disponíveis com o [Icônes](https://icones.js.org/).

### Estilizando Ícones

Você pode estilizar os ícones como qualquer outro elemento HTML. Por exemplo:

```html
<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping" />
```

<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping ml-2" />

## Slots

> Disponível desde a v0.18

Alguns layouts podem fornecer vários pontos de contribuição usando [slots nomeados do Vue](https://v3.vuejs.org/guide/component-slots.html).

Por exemplo, no [layout `two-cols`](https://github.com/slidevjs/slidev/blob/main/packages/client/layouts/two-cols.vue), você pode ter duas colunas lado a lado: a da esquerda (slot `default`) e a da direita (slot `right`).

```md
---
layout: two-cols
---

<template v-slot:default>

# Esquerda

Isto é mostrado à esquerda

</template>
<template v-slot:right>

# Direita

Isto é mostrado à direita

</template>
```

<div class="grid grid-cols-2 rounded border border-gray-400 border-opacity-50 px-10 pb-4">
<div>
<h3>Esquerda</h3>
<p>Isto é mostrado à esquerda</p>
</div>
<div>
<h3>Direita</h3>
<p>Isto é mostrado à direita</p>
</div>
</div>

Nós também fornecemos uma sintaxe abreviada `::nome::` para o nome do slot. A seguinte exemplo funciona exatamente como o anterior.

```md
---
layout: two-cols
---

# Esquerda

Isto é mostrado à esquerda

::right::

# Direita

Isto é mostrado à direita
```

Você também pode explicitamente especificar o slot padrão para ter uma ordenação customizada:

```md
---
layout: two-cols
---

::right::

# Direita

Isto é mostrado à direita

::default::

# Esquerda

Isto é mostrado à esquerda
```

<<<<<<< HEAD
## Configurações
=======
## Import Code Snippets

> Available since v0.47.0

You can import code snippets from existing files via following syntax:

```md
<<< @/snippets/snippet.js
```

::: tip
The value of `@` corresponds to the source root, the directory where the `slides.md` is located.
:::

This feature is vendored from VitePress, learn more about it in [VitePress's documentation](https://vitepress.dev/guide/markdown#import-code-snippets).

## Configurations
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

Todas as configurações necessárias podem ser definidas no arquivo Markdown. Por exemplo:

```md
---
theme: seriph
layout: cover
background: 'https://source.unsplash.com/1600x900/?nature,water'
---

# Slidev

Esta a página de capa.
```

Aprenda mais sobre as [configurações do frontmatter](/custom/#configuracoes-do-frontmatter).

## LaTeX

O Slidev vem com suporte a LaTeX incluído, usando o [KaTeX](https://katex.org/) para isso.

<TheTweet id="1392246507793915904" />

### Em Linha

Insira um `$` em cada lado do seu LaTeX para renderizá-lo na mesma linha.

```md
$\sqrt{3x-1}+(1+x)^2$
```

### Bloco

Use dois (`$$`) para renderização em bloco. Este modo mostra símbolos maiores e centraliza o resultado.

```latex
$$
\begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array}
$$
```

Aprenda mais: [Demonstração](https://sli.dev/demo/starter/8) | [KaTeX](https://katex.org/) | [`markdown-it-katex`](https://github.com/waylonflinn/markdown-it-katex)

<<<<<<< HEAD
## Diagramas
=======
### LaTex line highlighting

> Available since v0.43.1

To highlight specific lines, simply add line numbers within bracket `{}`. Line numbers start counting from 1 by default.

```latex
$$ {1|3|all}
\begin{array}{c}
\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\
\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\
\nabla \cdot \vec{\mathbf{B}} & = 0
\end{array}
$$
```

The `at` and `finally` options of [code blocks](#line-highlighting) are also available for LaTeX blocks.

## Diagrams
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

Você também pode criar diagramas / gráficos a partir de descrições em texto no seu Markdown, renderizado pelo [Mermaid](https://mermaid-js.github.io/mermaid).

Blocos de código marcados como `mermaid` serão convertidos para diagramas, por exemplo:

````md
```mermaid
sequenceDiagram
<<<<<<< HEAD
  Valentina->Enzo: Olá Enzo, tudo bem?
  Note over Valentina,Enzo: Uma interação clássica
//```
~~~
=======
  Alice->John: Hello John, how are you?
  Note over Alice,John: A typical interaction
```
````
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

Você pode até passar um objeto com opções para especificar o tamanho e o tema. A sintaxe do objeto é de um objeto literal do JavaScript, você vai precisar adicionar aspas (`'`) para textos e usar vírgula (`,`) entre cada chave (`theme`, `scale`, etc).

````md
```mermaid {theme: 'neutral', scale: 0.8}
graph TD
<<<<<<< HEAD
B[Texto] --> C{Decisão}
C -->|Um| D[Resultado 1]
C -->|Dois| E[Resultado 2]
//```
~~~
=======
B[Text] --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
```
````
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

Aprenda mais: [Demonstração](https://sli.dev/demo/starter/9) | [Mermaid](https://mermaid-js.github.io/mermaid)

## Múltiplas Entradas

> Disponível desde a v0.15

Você pode dividir seu arquivo `slides.md` em múltiplos arquivos e organizá-los como preferir.

`slides.md` :

<!-- eslint-skip -->

```md
# Página 1

Está é uma página comum

---
src: ./subpagina2.md
---

<!-- esta página será carregada a partir do arquivo './subpagina2.md' -->
Conteúdo na linha será ignorado
```

`subpage2.md` :

```md
# Página 2

Está página é de outro arquivo
```

### Mesclagem de Frontmatter

Você pode prover frontmatters tanto para sua entrada principal quanto em páginas markdown externas. Caso elas tenham chaves repetidas, as da **entrada principal têm maior prioridade**. Por exemplo:

`slides.md` :

```md
---
src: ./cover.md
background: https://sli.dev/bar.png
class: text-center
---
```

`cover.md` :

```md
---
layout: cover
background: https://sli.dev/foo.png
---

# Capa

Página de Capa
```

Vai acabar sendo equivalente à seguinte página:

```md
---
layout: cover
background: https://sli.dev/bar.png
class: text-center
---

# Capa

Página de Capa
```

### Reutilização de Página

Com o suporte a múltiplas entradas, reutilizar páginas pode ser simples. Por exemplo:

```yaml
---
src: ./capa.md
---

---
src: ./intro.md
---

---
src: ./conteudo.md
---

---
# reutilização
src: ./conteudo.md
---
```

## MDC Syntax

> Available since v0.43.0

Slidev supports optional [MDC (Markdown Components) Syntax](https://content.nuxtjs.org/guide/writing/mdc) powered by [`markdown-it-mdc`](https://github.com/antfu/markdown-it-mdc).

You can enable it by adding `mdc: true` to the frontmatter of your markdown file.

```mdc
---
mdc: true
---

This is a [red text]{style="color:red"} :inline-component{prop="value"}

![](/image.png){width=500px lazy}

::block-component{prop="value"}
The **default** slot
::
```

Learn more about [the syntax](https://content.nuxt.com/guide/writing/mdc).
