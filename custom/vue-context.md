# Contexto Global do Vue

O Slidev injeta um [contexto global do Vue](https://v3.vuejs.org/api/application-config.html#globalproperties) `$slidev` para condições avançadas ou controles de navegação.

## Uso

Você pode acessá-lo de qualquer lugar no seu markdown e template Vue, com a [sintaxe "Mustache"](https://v3.vuejs.org/guide/template-syntax.html#interpolations).

```md
<!-- slides.md -->

# Página 1

A página atual é: {{ $slidev.nav.currentPage }}
```

```html
<!-- Foo.vue -->

<template>
  <div>Título: {{ $slidev.configs.title }}</div>
  <button @click="$slidev.nav.next">Próxima Página</button>
</template>
```

## Propriedades

### `$slidev.nav`

Um objeto reativo contendo as propriedades e controles da navegação dos slides. Por exemplo:

```js
$slidev.nav.next() // vai para o próximo passo

$slidev.nav.nextSlide() // vai para o próximo slide (pula v-clicks)

$slidev.nav.go(10) // vai para o slide #10
```

```js
$slidev.nav.currentPage // número do slide atual

$slidev.nav.currentLayout // id do layout atual

$slidev.nav.clicks // contagem de clicks atual
```

Para mais propriedades disponíveis, consulte as exportações do arquivo [nav.ts](https://github.com/slidevjs/slidev/blob/main/packages/client/logic/nav.ts).

### `$slidev.configs`

Um objeto reativo que contém as [configurações do primeiro frontmatter](/custom/#configuracoes-do-frontmatter) do seu `slides.md`. Por exemplo:

```yaml
---
title: Meu Primeiro Slidev!
---
```

```
{{ $slidev.configs.title }} // 'Meu Primeiro Slidev!'
```

### `$slidev.themeConfigs`

Um objeto reativo contendo as configurações de tema.

```yaml
---
title: Meu Primeiro Slidev!
themeConfig:
  primary: #213435
---
```

```
{{ $slidev.themeConfigs.primary }} // '#213435'
```

### `$nav`

> Available since v0.43.0

A shorthand of `$slidev.nav`.

### `$clicks`

> Available since v0.43.0

A shorthand of `$slidev.nav.clicks`.

```html
<div v-if="$clicks > 3">Content</div>
```
