# Configurar Atalhos

> Disponível a partir da v0.20

> Since v0.35.6 (excluded), you decide which base shortcuts to keep (see `...base,` below).

<Environment type="client" />

Crie o arquivo `./setup/shortcuts.ts` com o seguinte conteúdo:

```ts
import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base, // keep the existing shortcuts
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

<<<<<<< HEAD
Confira [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) para mais detalhes sobre o evento de uma tecla pressionada.
=======
The `key` type only allows for strings, but you can still bind multiple keys by using following convention:

```ts
import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base,
    {
      key: 'ShiftLeft+ArrowRight',
      fn: () => nav.next(),
      autoRepeat: true,
    }
  ]
})
```

Refer to [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) for more details about key pressed event.
>>>>>>> 2b46447648e5687da75c541148acdffeeb2de2c6
