# Destacadores

<<<<<<< HEAD
O Slidev vem com dois destacadores de sintaxe pra você escolher:

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)

**Prism** é um dos destacadores de sintaxe mais populares. O destaque é feito adicionando classes de token ao código e é colorido utilizando CSS. Você pode pesquisar nos seus [temas oficiais](https://github.com/PrismJS/prism-themes), ou criar/customizar um você mesmo de forma bem fácil usando o [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars).

**Shiki**, por outro lado, é um destacador de sintaxe TextMate baseado em gramática. Ele gera tokens coloridos, então não é necessário CSS adicional. Já que ele tem um ótimo suporte gramatical, as cores geradas são bem precisas, como as que você vê no VS Code. Shiki também vem com [vários temas predefinidos](https://github.com/shikijs/shiki/blob/master/docs/themes.md). O ponto negativo do Shiki é que ele também precisa de temas TextMate (compatíveis com temas do VS Code) para fazer o destaque, o que pode ser um pouco mais complicado de customizar.

Os temas do Slidev geralmente suportam tanto Prism quanto Shiki, mas dependendo do temas que estiver usando, pode ser que só suporte um deles.

Quando você tiver escolha, a troca é basicamente:

- **Prism** para uma customização mais fácil
- **Shiki** para um destaque mais preciso

Por padrão, o Slidev usa Prism. Você pode mudar isso modificando seu frontmatter:

```yaml
---
highlighter: shiki
---
```

## Configurar Prism

Para configurar seu Prism, você pode simplesmente importar o tema css or usar o [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) para configurar temas tanto para o modo claro quanto para o escuro. Consulte suas documentações para mais detalhes.
=======
Slidev uses [Shiki](https://github.com/shikijs/shiki) as the code highlighter. It's a TextMate grammar-powered syntax highlighter that generates colored tokens, so there is no additional CSS needed. Since it has great grammar support, the generated colors are very accurate, just like what you will see in VS Code. Shiki also comes with [a bunch of built-in themes](https://shiki.style/themes). In Slidev, we also provided the [TwoSlash](#twoslash-integration) support is also built-in.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

## Configurar Shiki

<Environment type="both" />

<<<<<<< HEAD
Crie o arquivo `./setup/shiki.ts` com o seguinte conteúdo:
=======
Create `./setup/shiki.ts` file with the following content:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: 'min-dark',
      light: 'min-light',
    },
    transformers: [
      // ...
    ],
  }
})
```

<<<<<<< HEAD
Consulte a [documentação do Shiki](https://github.com/shikijs/shiki/blob/master/docs/themes.md#all-themes) para ver o nome dos temas disponíveis.

Ou se você quiser usar seu próprio tema:
=======
If you want to add custom theme or language (TextMate grammar/themes in JSON), you can import them in the setup file:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'
import customTheme from './customTheme.tmTheme.json'
import customLanguage from './customLanguage.tmLanguage.json'

export default defineShikiSetup(() => {
  return {
<<<<<<< HEAD
    theme: {
      dark: await loadTheme('caminho/para/tema.json')),
      light: await loadTheme('caminho/para/tema.json')),
=======
    themes: {
      dark: customTheme,
      light: 'min-light',
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3
    },
    langs: [
      'js',
      'typescript',
      'cpp',
      customLanguage,
      // ...
    ],
    transformers: [
      // ...
    ],
  }
})
```

Check [Built-in languages](https://shiki.style/languages) and [Built-in themes](https://shiki.style/themes), and refer to [Shiki's docs](https://shiki.style) for more details.

:::info
For now, Shiki Magic Move does not support transformers.
:::

## Configure Prism

:::warning
Prism support is deprecated and will be removed in the future. Please consider using Shiki instead.
:::

To configure your Prism, you can just import the theme CSS or use [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) to configure themes for both light and dark mode. Refer to its docs for more details.
