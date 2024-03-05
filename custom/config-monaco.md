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

~~~md
```js {monaco} // [!code ++]
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
<<<<<<< HEAD
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
=======
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0
```
~~~

<<<<<<< HEAD
## Instalação Automática dos Tipos
=======
## TypeScript Types
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

Quando é usado TypeScript com o Monaco, os tipos para as dependências serão instalados automaticamente no lado do cliente.

~~~md
```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
```
~~~

<<<<<<< HEAD
Neste exemplo acima, verifique que tanto o `vue` quanto o `@vueuse/core` estão instalados localmente assim como as dependências / dependências dev, o Slidev vai lidar com o resto para obter os tipos para o editor automaticamente!
=======
In the example above, make sure `vue` and `@vueuse/core` are installed locally as dependencies / devDependencies, Slidev will handle the rest to get the types working for the editor automatically. When deploy as SPA, those types will also be bundled for static hosting.

### Additional Types

Slidev will scan all the monaco codeblocks in your slides and import the types for those used libraries for you. In case it missed some, you can explicitly specify extra packages to import the types for:

```md
---
monacoTypesAdditionalPackages:
  - lodash-es
  - foo
---
```

### Auto Type Acquisition

You can optionally switch to load types from CDN by setting the following headmatter:

```md
---
monacoTypesSource: ata
---
```

This feature is powered by [`@typescript/ata`](https://github.com/microsoft/TypeScript-Website/tree/v2/packages/ata) and runs completely on the client-side.
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

## Configurar Temas

<<<<<<< HEAD
O tema é controlado pelo Slidev baseado no modo claro/escuro. Se você quiser customizar-lo, é só passar o id do tema na função de configuração:
=======
Since v0.48.0, Monaco will reuse the Shiki theme you configured in [Shiki's setup file](/custom/highlighters#configure-shiki), powered by [`@shikijs/monaco`](https://shiki.style/packages/monaco). You don't need to worry about it anymore and it will have a consistent style with the rest of your code blocks.

## Configure the Editor

> Available since v0.43.0

If you would like to customize the Monaco editor you may pass an `editorOptions` object that matches the [Monaco IEditorOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOptions.html) definition.

~~~md
```ts {monaco} { editorOptions: { wordWrap:'on'} }
console.log('HelloWorld')
```
~~~

Alternatively if you would like these options to be applied to every Monaco instance, you can return them in the `defineMonacoSetup` function
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

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

<<<<<<< HEAD
Se você quiser carregar temas customizados:
=======
## Disabling
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

Since v0.48.0, Monaco editor is enabled by default and only be bundled when you use it. If you want to disable it, you can set `monaco` to `false` in the frontmatter of your slide:

```yaml
---
monaco: false # can also be `dev` or `build` tp conditionally enable it
---
```
<<<<<<< HEAD

> Se você estiver criando um tema para o Slidev, use o `import()` dinâmico na função de configuração para obter resultados melhores.
=======
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0
