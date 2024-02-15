# Destacadores

<<<<<<< HEAD
O Slidev vem com dois destacadores de sintaxe pra você escolher:
=======
Slidev comes with two syntax highlighters for you to choose from:
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)

**Prism** é um dos destacadores de sintaxe mais populares. O destaque é feito adicionando classes de token ao código e é colorido utilizando CSS. Você pode pesquisar nos seus [temas oficiais](https://github.com/PrismJS/prism-themes), ou criar/customizar um você mesmo de forma bem fácil usando o [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars).

<<<<<<< HEAD
**Shiki**, por outro lado, é um destacador de sintaxe TextMate baseado em gramática. Ele gera tokens coloridos, então não é necessário CSS adicional. Já que ele tem um ótimo suporte gramatical, as cores geradas são bem precisas, como as que você vê no VS Code. Shiki também vem com [vários temas predefinidos](https://github.com/shikijs/shiki/blob/master/docs/themes.md). O ponto negativo do Shiki é que ele também precisa de temas TextMate (compatíveis com temas do VS Code) para fazer o destaque, o que pode ser um pouco mais complicado de customizar.
=======
**Shiki** is a TextMate grammar-powered syntax highlighter. It generates colored tokens, so there is no additional CSS needed. Since it has great grammar support, the generated colors are very accurate, just like what you will see in VS Code. Shiki also comes with [a bunch of built-in themes](https://shiki.style/themes). In Slidev, we also provided the [TwoSlash](#twoslash-integration) support is also built-in.
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280

Os temas do Slidev geralmente suportam tanto Prism quanto Shiki, mas dependendo do temas que estiver usando, pode ser que só suporte um deles.

Quando você tiver escolha, a troca é basicamente:

<<<<<<< HEAD
- **Prism** para uma customização mais fácil
- **Shiki** para um destaque mais preciso

Por padrão, o Slidev usa Prism. Você pode mudar isso modificando seu frontmatter:
=======
- **Prism** for easier customization
- **Shiki** for accurate highlighting

Slidev uses Shiki by default since v0.47. You can switch to it by adding the following to your `slides.md`:
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280

```yaml
---
highlighter: Prism
---
```

<<<<<<< HEAD
## Configurar Prism

Para configurar seu Prism, você pode simplesmente importar o tema css or usar o [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) para configurar temas tanto para o modo claro quanto para o escuro. Consulte suas documentações para mais detalhes.

## Configurar Shiki
=======
## Configure Shiki
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280

<Environment type="node" />

Crie o arquivo `./setup/shiki.ts` com o seguinte conteúdo:

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
    ]
  }
})
```

<<<<<<< HEAD
Consulte a [documentação do Shiki](https://github.com/shikijs/shiki/blob/master/docs/themes.md#all-themes) para ver o nome dos temas disponíveis.

Ou se você quiser usar seu próprio tema:

```ts
/* ./setup/shiki.ts */

import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(async({ loadTheme }) => {
  return {
    theme: {
      dark: await loadTheme('caminho/para/tema.json')),
      light: await loadTheme('caminho/para/tema.json')),
    },
  }
})
```
=======
Refer to [Shiki's docs](https://shiki.style) for available theme names.

## Configure Prism

To configure your Prism, you can just import the theme CSS or use [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) to configure themes for both light and dark mode. Refer to its docs for more details.
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280
