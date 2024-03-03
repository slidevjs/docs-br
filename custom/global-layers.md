# Camadas Globais

> Disponível a partir da v0.17

Camadas globais te permitem ter componentes customizados que **permanecem** pelos slides. Isto pode ser útil para ter rodapés, animações entre os slides, efeitos globais, etc.

<<<<<<< HEAD
O Slidev disponibiliza duas camadas para está funcionalidade, crie o arquivo `global-top.vue` ou `global-bottom.vue` na raiz do projeto e elas serão inseridas automaticamente.
=======
Slidev provides three layers for this usage, create `global-top.vue`, `global-bottom.vue` or `custom-nav-controls.vue` under your project root and it will pick up automatically.
>>>>>>> ee683ae81a2021c44b278d720a418ee0c6ddb537

Relacionamento das Camadas:

- Cabeçalho Global (`global-top.vue`)
- Slides
<<<<<<< HEAD
- Rodapé Global (`global-bottom.vue`)
=======
- Global Bottom (`global-bottom.vue`)
- NavControls
  - Customized Navigation Controls (`custom-nav-controls.vue`)
>>>>>>> ee683ae81a2021c44b278d720a418ee0c6ddb537

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
  <button class="icon-btn" title="Next" @click="$slidev.nav.next">
    <carbon:arrow-right />
  </button>
</template>
```

The button `Next` will appear in NavControls.

To enable it conditionally, you can apply it with the [Vue Global Context](/custom/vue-context).
>>>>>>> ee683ae81a2021c44b278d720a418ee0c6ddb537

```html
<!-- oculta o rodapé na Página 4 -->
<template>
  <footer
    v-if="$slidev.nav.currentPage !== 4"
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
    v-if="$slidev.nav.currentLayout !== 'cover'"
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
    v-if="$slidev.nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
  </footer>
</template>
```

```html
<!-- custom-nav-controls -->
<!-- hide the button in Presenter model -->
<template>
  <button v-if="!$slidev.nav.isPresenter" class="icon-btn" title="Next" @click="$slidev.nav.next">
    <carbon:arrow-right />
  </button>
</template>
```
