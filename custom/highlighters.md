# Destacadores

O Slidev vem com dois destacadores de sintaxe pra você escolher:

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)
- [Shikiji](https://github.com/antfu/shikiji)

**Prism** é um dos destacadores de sintaxe mais populares. O destaque é feito adicionando classes de token ao código e é colorido utilizando CSS. Você pode pesquisar nos seus [temas oficiais](https://github.com/PrismJS/prism-themes), ou criar/customizar um você mesmo de forma bem fácil usando o [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars).

**Shiki**, por outro lado, é um destacador de sintaxe TextMate baseado em gramática. Ele gera tokens coloridos, então não é necessário CSS adicional. Já que ele tem um ótimo suporte gramatical, as cores geradas são bem precisas, como as que você vê no VS Code. Shiki também vem com [vários temas predefinidos](https://github.com/shikijs/shiki/blob/master/docs/themes.md). O ponto negativo do Shiki é que ele também precisa de temas TextMate (compatíveis com temas do VS Code) para fazer o destaque, o que pode ser um pouco mais complicado de customizar.

<<<<<<< HEAD
Os temas do Slidev geralmente suportam tanto Prism quanto Shiki, mas dependendo do temas que estiver usando, pode ser que só suporte um deles.
=======
**Shikiji** is a ESM rewrite of Shiki bringing many improvements and new features. You could have [AST-based transformers](https://github.com/antfu/shikiji#hast-transformers) to customize how the code is rendered. And the [TwoSlash](#twoslash) support is also built-in.

Slidev themes usually support both Prism and Shiki, but depending on the theme you are using, it might only support one of them.
>>>>>>> 145fc07cd89b05477358f72609931fdf9c7d68cf

Quando você tiver escolha, a troca é basicamente:

<<<<<<< HEAD
- **Prism** para uma customização mais fácil
- **Shiki** para um destaque mais preciso

Por padrão, o Slidev usa Prism. Você pode mudar isso modificando seu frontmatter:
=======
- **Prism** for easier customization
- **Shiki** for more accurate highlighting
- **Shikiji** on top of Shiki, it also enables [TwoSlash](#twoslash) support and custom transformers addons. 

Slidev uses Prism by default for compatibility. We recommend using Shikiji for more accurate and feature-rich highlighting, you can switch to it by adding the following to your `slides.md`:
>>>>>>> 145fc07cd89b05477358f72609931fdf9c7d68cf

```yaml
---
highlighter: shikiji
---
```

<<<<<<< HEAD
## Configurar Prism
=======
## TwoSlash Integration

This feature is only available when you set `highlighter` to `shikiji`.

[TwoSlash](https://www.typescriptlang.org/dev/twoslash/) is a powerful tool for rendering TypeScript code blocks with type informations on hover or inlined. It's quite useful for preapring slides for JavaScript/TypeScript related topics.

To use it, you can add `twoslash` to the code block's language identifier:

~~~md
```ts twoslash
console.log('hello')
```
~~~

And example of TwoSlash enabled code snippet [can be found here](https://antfu.me/posts/shikiji-twoslash).

## Configure Prism
>>>>>>> 145fc07cd89b05477358f72609931fdf9c7d68cf

Para configurar seu Prism, você pode simplesmente importar o tema css or usar o [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) para configurar temas tanto para o modo claro quanto para o escuro. Consulte suas documentações para mais detalhes.

## Configurar Shiki

<Environment type="node" />

Crie o arquivo `./setup/shiki.ts` com o seguinte conteúdo:

```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    theme: {
      dark: 'min-dark',
      light: 'min-light',
    },
  }
})
```

Consulte a [documentação do Shiki](https://github.com/shikijs/shiki/blob/master/docs/themes.md#all-themes) para ver o nome dos temas disponíveis.

Ou se você quiser usar seu próprio tema:

```ts
/* ./setup/shiki.ts */

import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(async({ loadTheme }) => {
  return {
    theme: {
<<<<<<< HEAD
      dark: await loadTheme('caminho/para/tema.json')),
      light: await loadTheme('caminho/para/tema.json')),
=======
      dark: await loadTheme('path/to/theme.json'),
      light: await loadTheme('path/to/theme.json'),
>>>>>>> 145fc07cd89b05477358f72609931fdf9c7d68cf
    },
  }
})
```

## Configure Shikiji

<Environment type="node" />

Create `./setup/shikiji.ts` file with the following content:

```ts
/* ./setup/shikiji.ts */
import { defineShikijiSetup } from '@slidev/types'

export default defineShikijiSetup(() => {
  return {
    themes: {
      dark: 'vitesse-dark',
      light: 'vitesse-light',
    },
    transformers: [
      ...
    ]
  }
})
```

Refer to [Shikiji's docs](https://github.com/antfu/shikiji) for all available options.

> It make it easier for the community to adapt, when no `shikiji.ts` it presented, we will look for `shiki.ts` and try to convert it to Shikiji options.
