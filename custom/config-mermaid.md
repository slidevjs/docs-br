# Configurar Mermaid

<Environment type="client" />

Crie o arquivo `./setup/mermaid.ts` com o seguinte conteúdo:

```ts
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'forest',
  }
})
```

Com essa configuração, você pode prover as configurações customizadas para o [Mermaid](https://mermaid-js.github.io/). Consulte as definições de tipo e suas documentações para obter mais detalhes.
