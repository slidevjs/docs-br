# Configurar Windi CSS

<Environment type="node" />

O Markdown suporta naturalmente tags HTML embutidas. Portanto, você pode estilizar seu conteúdo como preferir. Para oferecer certa comodidade, nós temos o [Windi CSS](https://github.com/windicss/windicss) embutido, para que você possa estilizar o conteúdo diretamente usando classes.

Por exemplo:

```html
<div class="grid pt-4 gap-4 grids-cols-[100px,1fr]">

### Nome

- Item 1
- Item 2

</div>
```

O [Attributify Mode](https://windicss.org/posts/v30.html#attributify-mode) no [Windi CSS v3.0](https://windicss.org/posts/v30.html) é habilitado por padrão.

## Configurações

Para configurar o Windi CSS, crie o arquivo `setup/windicss.ts` com o seguinte conteúdo para estender as configurações existentes:

```ts
// setup/windicss.ts

import { defineWindiSetup } from '@slidev/types'

// extenddendo a configuração existente do windicss
export default defineWindiSetup(() => ({
  shortcuts: {
    // plano de fundo padrão customizado
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  theme: {
    extend: {
      // fontes podem ser substituídas aqui, lembre-se de atualizar os links de fontes da web no `index.html`
      fontFamily: {
        sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        mono: '"Fira Code", monospace',
      },
    },
  },
}))
```

Saiba mais sobre as [configurações do Windi CSS](https://windicss.org/guide/configuration.html).
