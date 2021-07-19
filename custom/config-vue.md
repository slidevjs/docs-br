# Configurar Vue

<Environment type="client" />

Slidev usa o [Vue 3](https://v3.vuejs.org/) para renderizar a aplicação no lado do cliente. Você pode estender a aplicação para adicionar plug-ins e configurações customizadas.

Crie o arquivo `./setup/main.ts` com o seguinte conteúdo:

```ts
import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(YourPlugin)
})
```

Isto pode ser usado também como a entrada principal da sua aplicação do Slidev para fazer algumas inicializações antes do app rodar. 

Saiba mais: [Vue Application API](https://v3.vuejs.org/api/application-api.html#component).
