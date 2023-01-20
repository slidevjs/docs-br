# Estrutura de Diretório

O Slidev emprega algumas convenções de estrutura de diretório para minimizar a superfície de configuração e tornar as extensões das funcionalidades flexíveis e intuitivas.

A estrutura básica é a seguinte:

```bash
<<<<<<< HEAD
seu-slidev/
  ├── components/       # componentes customizados
  ├── layouts/          # layouts customizados
  ├── public/           # recursos estáticos
  ├── setup/            # configurações / hooks customizados
  ├── styles/           # estilos customizados
  ├── index.html        # injeções ao index.html
  ├── slides.md         # a entrada principal dos slides
  └── vite.config.ts    # extensões às configurações do vite
=======
your-slidev/
  ├── components/       # custom components
  ├── layouts/          # custom layouts
  ├── public/           # static assets
  ├── setup/            # custom setup / hooks
  ├── styles/           # custom style
  ├── index.html        # injections to index.html
  ├── slides.md         # the main slides entry
  └── vite.config.ts    # extending vite config
>>>>>>> 9477d414697bced184348cd18c6374f1bbd82a5c
```

Todos eles são opcionais.

## Componentes

Convenções: `./components/*.{vue,js,ts,jsx,tsx,md}`

Os componentes dentro deste diretório podem ser usados diretamente no Markdown dos slides como o mesmo nome do arquivo.

Por exemplo:

```bash
seu-slidev/
  ├── ...
  └── components/
      ├── MeuComponente.vue
      └── HelloWorld.ts
```

```md
<!-- slides.md -->

# Meu slide

<MeuComponente :count="4"/>

<!-- os dois nomes funcionam -->

<hello-world foo="bar">
  Slot
</hello-world>
```

<<<<<<< HEAD
Esta funcionalidade é fornecida pelo [`vite-plugin-components`](https://github.com/antfu/vite-plugin-components), saiba mais por lá.
=======
This feature is powered by [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components), learn more there.
>>>>>>> 9477d414697bced184348cd18c6374f1bbd82a5c

O Slidev também disponibiliza alguns [componentes embutidos](/builtin/components) pra você usar.

## Layouts

Convenções: `./layouts/*.{vue,js,ts,jsx,tsx}`

```
su-slidev/
  ├── ...
  └── layouts/
      ├── cover.vue
      └── meu-tema-supimpa.vue
```

Você pode usar qualquer nome de arquivo para o seu layout. Depois é só referenciar o layout no seu cabeçalho YAML usando o nome do arquivo.

```yaml
---
layout: meu-tema-supimpa
---
```

Se o layout que você fez tiver o mesmo nome de um interno ou de algum tema, o seu layout customizado terá prioridade sobre os demais. A ordem de prioridade é `local > tema > interno`.

No componente de layout, use `<slot/>` para o conteúdo do slide. Por exemplo:

```html
<!-- default.vue -->
<template>
  <div class="slidev-layout default">
    <slot />
  </div>
</template>
```

## Público

Convenções: `./public/*`

Recursos neste diretórios serão servidos na rota raiz `/` durante o desenvolvimento, e copiados para a raiz do diretório `dist` do jeito que estiverem. Leia mais sobre [o diretório `public` do Vite's](https://vitejs.dev/guide/assets.html#the-public-directory).

## Estilo

Convenções: `./style.css` | `./styles/index.{css,js,ts}`

Arquivos que seguem esta convenção serão injetados na raiz da aplicação. Se você precisar importar múltiplas entradas de CSS, você pode criar a seguinte estrutura e administrar a ordem de importação por conta própria.

```bash
seu-slidev/
  ├── ...
  └── styles/
      ├── index.ts
      ├── base.css
      ├── code.css
      └── layouts.css
```

```ts
// styles/index.ts

import './base.css'
import './code.css'
import './layouts.css'
```

<<<<<<< HEAD
Estilos serão processados pelo [Windi CSS](http://windicss.org/) e o [PostCSS](https://postcss.org/), portanto você pode usar aninhamento de css e as [at-directives](https://windicss.org/features/directives.html) sem nenhuma configuração adicional.
Por exemplo:
=======
Styles will be processed by [Windi CSS](https://windicss.org/) and [PostCSS](https://postcss.org/), so you can use css nesting and [at-directives](https://windicss.org/features/directives.html) out-of-box. For example:
>>>>>>> 9477d414697bced184348cd18c6374f1bbd82a5c

```less
.slidev-layout {
  @apply px-14 py-10 text-[1.1rem];

  h1, h2, h3, h4, p, div {
    @apply select-none;
  }

  pre, code {
    @apply select-text;
  }

  a {
    color: theme('colors.primary');
  }
}
```

[Aprenda mais sobre a sintaxe](https://windicss.org/features/directives.html).

## `index.html`

Convenções: `index.html`

O `index.html` provê a habilidade de injetar meta tags e/ou script ao arquivo `index.html` principal.

Por exemplo, no caso do seguinte `index.html` customizado:

```html
<!-- ./index.html -->
<head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>

<body>
  <script src="./seus-scripts"></script>
</body>
```

O `index.html` final hospedado será:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png">
  <!-- injected head -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>
<body>
  <div id="app"></div>
  <script type="module" src="__ENTRY__"></script>
  <!-- injected body -->
  <script src="./seu-scripts"></script>
</body>
</html>
```

## Camadas Globais

Convenções: `global-top.vue` | `global-bottom.vue`

Saiba mais: [Camadas Globais](/custom/global-layers)

