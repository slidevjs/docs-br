# Configurar Atalhos

> Disponível a partir da v0.20

<Environment type="client" />

Crie o arquivo `./setup/shortcuts.ts` com o seguinte conteúdo:

```ts
import { defineShortcutsSetup, NavOperations } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: 'enter',
      fn: () => nav.next(),
      autoRepeat: true,
    },
    {
      key: 'backspace',
      fn: () => nav.prev(),
      autoRepeat: true,
    },
  ]
})
```

Com a configuração, você pode fornecer as customizações para os atalhos mencionados em [Navegação](/guide/navigation#barra-de-navegacao). A configuração acima vincula a próxima animação ou slide ao <kbd>enter</kbd> e a animação ou slide anterior ao <kbd>backspace</kbd>.

A função de configuração recebe um objeto com alguns métodos de navegação, e retorna um array contendo alguns atalhos de configuração. Confira as definições de tipos para mais detalhes.

Confira [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) para mais detalhes sobre o evento de uma tecla pressionada.
