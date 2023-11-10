# Configurar Monaco

<Environment type="client" />

Crie o arquivo `./setup/monaco.ts` com o seguinte conteúdo:

```ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  // use `monaco` to configure
})
```

Saiba mais sobre [como configurar o Monaco](https://github.com/Microsoft/monaco-editor).

## Uso

Para usar o Monaco nos seus slides, simplesmente acrescente `{monaco}` aos seus blocos de código:

~~~js
//```js
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
//```
~~~

Para

~~~js
//```js {monaco}
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
//```
~~~

## Exportando

Por padrão, Monaco só vai funcionar no modo `dev`. Se quiser tê-lo na aplicação SPA exportada, configure isso no seu frontmatter:

```yaml
---
monaco: true # padrão "dev"
---
```

## Instalação Automática dos Tipos

Quando é usado TypeScript com o Monaco, os tipos para as dependências serão instalados automaticamente no lado do cliente.

~~~ts
//```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
//```
~~~

Neste exemplo acima, verifique que tanto o `vue` quanto o `@vueuse/core` estão instalados localmente assim como as dependências / dependências dev, o Slidev vai lidar com o resto para obter os tipos para o editor automaticamente!

## Configurar Temas

O tema é controlado pelo Slidev baseado no modo claro/escuro. Se você quiser customizar-lo, é só passar o id do tema na função de configuração:

```ts
// ./setup/monaco.ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    theme: {
      dark: 'vs-dark',
      light: 'vs',
    },
  }
})
```

Se você quiser carregar temas customizados:

```ts
import { defineMonacoSetup } from '@slidev/types'

// change to your themes
import dark from 'theme-vitesse/themes/vitesse-dark.json'
import light from 'theme-vitesse/themes/vitesse-light.json'

export default defineMonacoSetup((monaco) => {
  monaco.editor.defineTheme('vitesse-light', light as any)
  monaco.editor.defineTheme('vitesse-dark', dark as any)

  return {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  }
})
```

<<<<<<< HEAD
> Se você estiver criando um tema para o Slidev, use o `import()` dinâmico na função de configuração para obter resultados melhores.
=======
> If you are creating a theme for Slidev, use dynamic `import()` inside the setup function to get better tree-shaking and code-splitting results.

## Configure the Editor

> Available since v0.43.0

If you would like to customize the Monaco editor you may pass an `editorOptions` object that matches the [Monaco IEditorOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOptions.html) definition.

~~~ts
//```ts {monaco} { editorOptions: { wordWrap:'on'} }
console.log('HelloWorld')
//```
~~~

Alternatively if you would like these options to be applied to every Monaco instance, you can return them in the `defineMonacoSetup` function

```ts
// ./setup/monaco.ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    editorOptions: {
      wordWrap: 'on'
    }
  }
})
```
>>>>>>> 32ffb9e79f43a405236e06473aaf65d3cf6e9aa7
