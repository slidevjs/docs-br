# Camadas Globais

<<<<<<< HEAD
> Disponível a partir da v0.17

Camadas globais te permitem ter componentes customizados que **permanecem** pelos slides. Isto pode ser útil para ter rodapés, animações entre os slides, efeitos globais, etc.

O Slidev disponibiliza duas camadas para está funcionalidade, crie o arquivo `global-top.vue` ou `global-bottom.vue` na raiz do projeto e elas serão inseridas automaticamente.

Relacionamento das Camadas:

- Cabeçalho Global (`global-top.vue`)
- Slides
- Rodapé Global (`global-bottom.vue`)
=======
Global layers allow you to have custom components that **persist** across slides. This could be useful for having footers, cross-slide animations, global effects, etc.

Slidev provides three layers for this usage, create `global-top.vue`, `global-bottom.vue` or `custom-nav-controls.vue` under your project root and it will pick up automatically.

There are also layers for **each** slide: `layouts/slide-top.vue` and `layouts/slide-bottom.vue`. The usage is similar to the global layers, but they are applied to every slide, so there may be more than one instance of them.

::: tip
When exporting, the `--per-slide` option should be used to ensure the global layers are applied to each slide correctly.
:::

## Layers relationship

At z-axis, from top to bottom:

- NavControls
  - Customized Navigation Controls (`custom-nav-controls.vue`)
- Global Top (`global-top.vue`) - single instance
- Slide Top (`slide-top.vue`) - instance per slide
- Slide Content
- Slide Bottom (`slide-bottom.vue`) - instance per slide
- Global Bottom (`global-bottom.vue`) - single instance
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

## Exemplo

```html
<!-- global-bottom.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">Seu Nome</footer>
</template>
```

O texto `Seu Nome` vai aparecer em todos os slides.

<<<<<<< HEAD
Para habilitar isso em função de alguma condição, você pode utilizar com o [Vue Global Context](/custom/vue-context).
=======
```html
<!-- custom-nav-controls -->
<template>
  <button class="icon-btn" title="Next" @click="$nav.next">
    <carbon:arrow-right />
  </button>
</template>
```

The button `Next` will appear in NavControls.

To enable it conditionally, you can apply it with the [Vue Global Context](/custom/vue-context).
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```html
<!-- oculta o rodapé na Página 4 -->
<template>
  <footer
    v-if="$nav.currentPage !== 4"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Seu Nome
  </footer>
</template>
```

```html
<!-- oculta o rodapé do layout "cover" -->
<template>
  <footer
    v-if="$nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Seu Nome
  </footer>
</template>
```

```html
<!-- um exemplo de rodapé para páginas -->
<template>
  <footer
    v-if="$nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    {{ $nav.currentPage }} / {{ $nav.total }}
  </footer>
</template>
```

```html
<!-- custom-nav-controls -->
<!-- hide the button in Presenter model -->
<template>
  <button v-if="!$nav.isPresenter" class="icon-btn" title="Next" @click="$nav.next">
    <carbon:arrow-right />
  </button>
</template>
```
