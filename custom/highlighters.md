# Destacadores

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
>>>>>>> d29625cb3633171f7cf2087a777e68a1cd76ea6f
    },
  }
})
```
