# Configurar KaTeX

<Environment type="node" />

Crie o arquivo `./setup/katex.ts` com o seguinte conteúdo:

```ts
import { defineKatexSetup } from '@slidev/types'

export default defineKatexSetup(() => {
  return {
    /* ... */
  }
})
```

Com essa configuração, você pode prover as configurações customizadas para o [KaTex Options](https://katex.org/docs/options.html). Consulte as definições de tipo e suas documentações para obter mais detalhes.
