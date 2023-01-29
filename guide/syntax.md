# Sintaxe do Markdown

Os slides são escritos em **um único arquivo markdown** (por padrão `./slides.md`).

Você pode usar [os recursos do Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) normalmente, com suporte adicional de HTML *inline* e Componentes do Vue. Estilização usando o [Windi CSS](https://windicss.org) também é suportada. Use `---` seguido de uma nova linha para separar seus slides.

~~~md
# Slidev

Olá, Mundo!

---

# Página 2

Use blocos de código diretmente para ter destaque na sintaxe

//```ts
console.log('Olá, Mundo!')
//```

---

# Página 3

Você pode usar o Windi CSS e componentes Vue diretamente para estilizar e enriquecer seus slides.

<div class="p-3">
  <Tweet id="20" />
</div>
~~~

## Front Matter & Layouts

Especifique layouts e outros metadados para cada slide convertendo os separadores em [blocos front matter](https://jekyllrb.com/docs/front-matter/). Cada frontmatter começa e termina com três traços (`---`). Os textos entre os traços são dados no formato [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started/). Por exemplo:

~~~md
---
layout: cover
---

# Slidev

Esta é a página capa.

---
layout: center
background: './images/background-1.png'
class: 'text-white'
---​

# Página 2

Esta é uma página com o layout `center` e uma imagem de fundo.

---

# Página 3

Está pe uma página padrão sem nenhum metadado adicional.
~~~

Dê uma olhada em [customização](/custom/) para mais detalhes.

## Blocos de Código

Um grande motivo pelo qual eu estou desenvolvendo o Slidev é a necessidade de fazer meu código aparecer perfeitamente nos slides. Então como você deve estar pensando, você pode usar blocos de código no estilo do Markdown para destacar seu código.

~~~ts
//```ts
console.log('Olá, Mundo!')
//```
~~~

<<<<<<< HEAD
Nós suportamos o [Prism](http://prismjs.com) e o [Shiki](https://github.com/shiki/shiki) como destacadores de sintaxe. Consulte [a seção de destacadores](/custom/highlighters) para mais detalhes.
=======
We support [Prism](https://prismjs.com) and [Shiki](https://github.com/shikijs/shiki) as syntax highlighters. Refer to [the highlighters section](/custom/highlighters) for more details.
>>>>>>> 2e53e8c41664c5aa920ca84e738e95c8a05fb349

### Realce de Linha

Para realçar linhas específicas, simplesmente adicione o número das linhas em chaves `{}`. A contagem do número das linhas começa a partir do 1.

~~~ts
//```ts {2,3}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
//```
~~~

Para definir os realces em vários passos, você pode usar `|` para separá-los. Por exemplo:

~~~ts
//```ts {2-3|5|all}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
//```
~~~

Isto vai primeiro realçar `a: Ref<number> | number` e `b: Ref<number> | number`, aí `return computed(() => unref(a) + unref(b))` após um clique, e por último, o bloco inteiro. Aprenda mais no [guia de animações no clique](/guide/animations#animacoes-no-clique).

<<<<<<< HEAD
### Editor Monaco
=======
To skip highlighting any lines, you can set the line number to `0`. For example

~~~ts {0}
//```ts {0}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
//```
~~~

If the code doesn't fit into one slide, you can pass an extra maxHeight option which will set fixed height
and enable scrolling

~~~ts {2|3|7|12}
//```ts {2|3|7|12} {maxHeight:'100px'}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
/// ...as many lines as you want
const c = add(1, 2)
//```
~~~

### Monaco Editor
>>>>>>> 2e53e8c41664c5aa920ca84e738e95c8a05fb349

Sempre que quiser fazer alguma modificação na apresentação, simplesmente adicione `{monaco}` após o id da linguagem — isto transforma o bloco em um editor Monaco com todos os seus recursos!

~~~ts
//```ts {monaco}
console.log('OláMundo')
//```
~~~

Aprenda mais sobre [configurar Monaco](/custom/config-monaco).

## Estilos Embutidos

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

A tag `<style>` no Markdown sempre segue um [escopo](https://vue-loader.vuejs.org/guide/scoped-css.html). Para redefinir estilos globalmente, dá uma olhada na [seção de customização](/custom/directory-structure#estilo).

Graças ao [Windi CSS](https://windicss.org), você pode usar aninhamento de CSS diretamente, além de [diretrizes](https://windicss.org/features/directives.html) (e.g. `@apply`).

```md
# Slidev

> Olá `mundo`

<style>
blockquote {
  code {
    @apply text-teal-500 dark:text-teal-400;
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

Se quiser aplicar tamanhos ou estilos customizados, você pode converter para uma tag `<img>`

```html
<img src="/foto.png" class="m-40 h-40 rounded shadow" />
```

## Notas

Você também pode fazer anotações em cada slide. Elas aparecerão no [Modo Apresentador](/guide/presenter-mode) para que você possa usá-las como referência durante apresentações.

Em Markdown, o último bloco de comentário em cada slide será considerado uma nota.

~~~md
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
~~~

## Ícones

<<<<<<< HEAD
O Slidev te permite acessar quase todos os conjutos de ícones open-source **diretamente** no seu markdown. Graças ao [`vite-plugin-icons`](https://github.com/antfu/vite-plugin-icons) e ao [Iconify](https://iconify.design/).
=======
Slidev allows you to have the accessing to almost all the popular open-source iconsets **directly** in your markdown. Powered by [`unplugin-icons`](https://github.com/antfu/unplugin-icons) and [Iconify](https://iconify.design/).
>>>>>>> 2e53e8c41664c5aa920ca84e738e95c8a05fb349

Os nomes seguem a convenção do [Iconify](https://iconify.design/) `{nome-da-coleção}-{nome-do-icone}`. Por exemplo:

- `<mdi-account-circle />` - <mdi-account-circle /> do [Material Design Icons](https://github.com/Templarian/MaterialDesign)
- `<carbon-badge />` - <carbon-badge /> do [Carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/icons)
- `<uim-rocket />` - <uim-rocket /> do [Unicons Monochrome](https://github.com/Iconscout/unicons)
- `<twemoji-cat-with-tears-of-joy />` - <twemoji-cat-with-tears-of-joy /> do [Twemoji](https://github.com/twitter/twemoji)
- `<logos-vue />` - <logos-vue /> do [SVG Logos](https://github.com/gilbarbara/logos)
- E muito mais...

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

## Configurações

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

<Tweet id="1392246507793915904" />

### Em Linha

Insira um `$` em cada lado do seu LaTeX para renderizá-lo na mesma linha.

```md
$\sqrt{3x-1}+(1+x)^2$
```

### Bloco

Use dois (`$$`) para renderização em bloco. Este modo mostra símbolos maiores e centraliza o resultado.

```md
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

## Diagramas

Você também pode criar diagramas / gráficos a partir de descrições em texto no seu Markdown, renderizado pelo [Mermaid](https://mermaid-js.github.io/mermaid).

Blocos de código marcados como `mermaid` serão convertidos para diagramas, por exemplo:

~~~md
//```mermaid
sequenceDiagram
  Valentina->Enzo: Olá Enzo, tudo bem?
  Note over Valentina,Enzo: Uma interação clássica
//```
~~~

Você pode até passar um objeto com opções para especificar o tamanho e o tema. A sintaxe do objeto é de um objeto literal do JavaScript, você vai precisar adicionar aspas (`'`) para textos e usar vírgula (`,`) entre cada chave (`theme`, `scale`, etc).

~~~md
//```mermaid {theme: 'neutral', scale: 0.8}
graph TD
B[Texto] --> C{Decisão}
C -->|Um| D[Resultado 1]
C -->|Dois| E[Resultado 2]
//```
~~~

Aprenda mais: [Demonstração](https://sli.dev/demo/starter/9) | [Mermaid](https://mermaid-js.github.io/mermaid)

## Múltiplas Entradas

> Disponível desde a v0.15

Você pode dividir seu arquivo `slides.md` em múltiplos arquivos e organizá-los como preferir.

`slides.md` :

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
