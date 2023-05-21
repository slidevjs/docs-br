# Configurar Vite

<Environment type="node" />

<<<<<<< HEAD
O Slidev usa o [Vite](http://vitejs.dev/) por baixo dos panos. Isso significa que você pode aproveitar o excelente sistema de plug-ins do Vite para personalizar ainda mais seus slides.
=======
Slidev is powered by [Vite](https://vitejs.dev/) under the hood. This means you can leverage Vite's great plugin system to customize your slides even further.
>>>>>>> d29625cb3633171f7cf2087a777e68a1cd76ea6f

O arquivo `vite.config.ts` será seguido se você tiver um.

O Slidev possui os seguintes plug-ins pré-configurados:

- [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- [unplugin-icons](https://github.com/antfu/unplugin-icons)
- [vite-plugin-vue-markdown](https://github.com/antfu/vite-plugin-vue-markdown)
- [vite-plugin-remote-assets](https://github.com/antfu/vite-plugin-remote-assets)
- [vite-plugin-windicss](https://github.com/windicss/vite-plugin-windicss)
- [unocss/vite](https://github.com/unocss/unocss/tree/main/packages/vite)

Saiba mais sobre as [pré-configurações aqui](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/plugins/preset.ts).

## Configurar Plug-ins Internos

> Disponível a partir da v0.21

Para configurar os plug-ins listados acima, crie um arquivo `vite.config.ts` com o seguinte conteúdo. Se atente ao fato de que o Slidev tem algumas opções pré-configuradas para estes plug-ins, e esse uso vai sobrepor algumas delas, o que potencialmente pode quebrar a aplicação. Por favor, trate isto como uma **funcionalidade avançada**, certifique-se de que você sabe o que está fazendo antes de continuar.

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    vue: {
      /* opções do vue */
    },
    markdown: {
      /* opções do markdown-it */
      markdownItSetup(md) {
        /* plug-ins customizados do markdown-it */
        md.use(/* ... */)
      },
    },
    /* opções para outros plug-ins */
  },
})
```

Veja as [declarações de tipo](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/options.ts#L50) para mais opções.
