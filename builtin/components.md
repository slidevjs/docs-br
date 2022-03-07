# Componentes

## Componentes internos

> A documentação dessa seção continua em progresso. Até lá, você pode olhar o [código-fonte](https://github.com/slidevjs/slidev/blob/main/packages/client/builtin) diretamente.

<<<<<<< HEAD
## Componentes customizados
=======
### `TOC`

Insert a Table Of Content.

Titles and title levels get automatically retrieved from the first title element of each slides.

You can override this automatic behaviour for a slide by using the front matter syntax:
```yml
---
title: Amazing slide title
level: 2
---
```

Or if you prefer the slide to not appear in the TOC at all, you can use:
```yml
---
hideInToc: true
---
```

#### Usage
~~~md
<Toc />
~~~

Parameters:

* `columns` (`string | number`, default: `1`): The number of columns of the display
* `maxDepth` (`string | number`, default: `Infinity`): The maximum depth level of title to display
* `minDepth` (`string | number`, default: `1`): The minimum depth level of title to display
* `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, default: `'all'`):
  * `'all'`: Display all items
  * `'onlyCurrentTree'`: Display only items that are in current tree (active item, parents and children of active item)
  * `'onlySiblings'`: Display only items that are in current tree and their direct siblings

## Custom Components
>>>>>>> 61b06f20d904b70a8b14d4b69879ed25d0f08510

Crie um diretório `components/` no diretório raiz do projeto, e simplesmente insira seu componente customizado do Vue lá dentro, depois disso você poderá usá-lo com o mesmo nome no seu arquivo markdown!

Leia mais na seção [Customização](/custom/directory-structure#componentes).

## Componentes providos por temas

Temas também podem fornecer componentes. É recomendado ler a documentação do tema para ver o que eles provém.

Saiba mais na seção de [estrutura de diretório](/custom/directory-structure).
