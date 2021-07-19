# Camadas Globais

> Disponível a partir da v0.17

Camadas globais te permitem ter componentes customizados que **permanecem** pelos slides. Isto pode ser útil para ter rodapés, animações entre os slides, efeitos globais, etc.

Slidev disponibiliza duas camadas para está funcionalidade, crie o arquivo `global-top.vue` ou `global-bottom.vue` na raiz do projeto e elas serão inseridas automaticamente.

Relacionamento das Camadas:

- Cabeçalho Global (`global-top.vue`)
- Slides
- Rodapé Global (`global-bottom.vue`)

## Exemplo

```html
<!-- global-top.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">Seu Nome</footer>
</template>
```

O texto `Seu Nome` vai aparecer em todos os slides.

Para habilitar isso em função de alguma condição, você pode utilizar com o [Vue Global Context](/custom/vue-context).

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
