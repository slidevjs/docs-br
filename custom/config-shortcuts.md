# Configurar Atalhos

> Disponível a partir da v0.20

> Since v0.35.6 (excluded), you decide which base shortcuts to keep (see `...base,` below).

<Environment type="client" />

<<<<<<< HEAD
Crie o arquivo `./setup/shortcuts.ts` com o seguinte conteúdo:
=======
## Getting started

Create `./setup/shortcuts.ts` with the following content:
>>>>>>> 37da379f2085eaf0e279e3b3929565606e0df481

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
## Advanced key binding

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

## Advanced navigation features

The `nav` navigation operations allows you to access some functionalities than basic _next slide_ or _previous slide_. See the following for use-cases:

```ts
import { defineShortcutsSetup, NavOperations } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: 'e',
      
      // Set the `e` keyboard shortcut to be used as a bookmark
      // or quick-access of sorts, to navigate specifically to
      // slide number 42
      fn: () => nav.go(42),
      autoRepeat: true,
    }
  ]
})
```

Refer to [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) for more details about key pressed event.
>>>>>>> 37da379f2085eaf0e279e3b3929565606e0df481
