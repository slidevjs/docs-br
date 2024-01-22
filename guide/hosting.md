<<<<<<< HEAD
# Hospedagem Estática
=======

# Static Hosting
>>>>>>> 9b64ca249c101e7e425d7ca81aebba12658b9b97

## Compilando Single Page Applications (SPA)

Você também pode compilar os slides em uma aplicação SPA auto-hospedável:

```bash
$ slidev build
```

<<<<<<< HEAD
A aplicação gerada estará disponível na pasta `dist/` e a partir daí você pode hospedá-la no [GitHub Pages](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/), ou em qualquer outra plataforma que preferir. Agora você pode compartilhar seus slides com o todo mundo com um único link.
=======
The generated application will be available under `dist/`.

You can test the generated build using a web server (Apache, NGINX, Caddy...etc.) or in the project you can directly run: `npx vite preview`.

Then you can host it on [GitHub Pages](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/), or whatever you want. Now you can share your slides with the rest of the world with a single link.
>>>>>>> 9b64ca249c101e7e425d7ca81aebba12658b9b97

### Diretório Base

<<<<<<< HEAD
Para implantar seus slides em sub-rotas, você precisará passar a opção `--base`. Por exemplo:
=======
To deploy your slides under sub-routes, you will need to pass the `--base` option. The `--base` path **must begin and end** with a slash `/`; for example:
>>>>>>> 9b64ca249c101e7e425d7ca81aebba12658b9b97

```bash
$ slidev build --base /palestras/minha-palestra-legal/
```

Consulte a [documentação do Vite](https://vitejs.dev/guide/build.html#public-base-path) para mais detalhes.

## Disponibilize um PDF para download

Você pode disponibilizar um PDF para download aos visitantes da sua aplicação SPA com a seguinte configuração:

```md
---
download: true
---
```

<<<<<<< HEAD
O Slidev vai gerar um arquivo PDF na compilação e um botão de download aparecerá na aplicação SPA.

Você também pode prover uma URL customizada para o PDF. Nesse caso, o processo de renderização do arquivo será pulado.
=======
Slidev will generate a PDF file along with the build, and a download button will be displayed in the SPA.

You can also provide a custom URL for the PDF. In that case, the rendering process will be skipped.
>>>>>>> 9b64ca249c101e7e425d7ca81aebba12658b9b97

```md
---
download: 'https://myside.com/my-talk.pdf'
---
```

<<<<<<< HEAD
## Exemplos
=======
This can also be done with the CLI option `--download` (`boolean` only).

```bash
$ slidev build --download
```

When using the download option, you can also provide the export options:

* By using [CLI export options](/guide/exporting.html)
* Or [frontmatter export options](/custom/#frontmatter-configures)

### Output directory

You can change the output directory using `--out`.

```bash
$ slidev build --out my-build-folder
```

### Watch mode

By passing the `--watch` option the build will run in watch mode and will rebuild anytime the source changes.

```bash
$ slidev build --watch
```

### Multiple entries

You can also build multiple slides at once.

```bash
$ slidev build slides1.md slides1.md
```

Or

```bash
$ slidev build *.md
```

In this case, each input file will generate a folder containing the build in the output directory.

## Examples
>>>>>>> 9b64ca249c101e7e425d7ca81aebba12658b9b97

Aqui estão alguns exemplos de aplicações SPA exportadas:

- [Starter Template](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) por [Anthony Fu](https://github.com/antfu)

Para mais, veja a [Galeria](/showcases).

## Hospedando

<<<<<<< HEAD
Nós recomendamos usar o comando `npm init slidev@lastest` para iniciar seu projeto, que já contém as configurações necessárias para serviços de hospedagem.
=======
We recommend to use `npm init slidev@latest` to scaffold your project, which contains the necessary configuration files for hosting services out-of-the-box.
>>>>>>> 9b64ca249c101e7e425d7ca81aebba12658b9b97

### Netlify

- [Netlify](https://netlify.com/)

Crie o arquivo `netlify.toml` na raiz do projeto com o seguinte conteúdo.

```ts
[build.environment]
  NODE_VERSION = "14"

[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

<<<<<<< HEAD
Depois vá para o seu painel de controle do Netlify e crie um novo site com o repositório.
=======
Then go to your Netlify dashboard and create a new site with the repository.
>>>>>>> 9b64ca249c101e7e425d7ca81aebba12658b9b97

### Vercel

- [Vercel](https://vercel.com/)

Crie o arquivo `vercel.json` na raiz do projeto com o seguinte conteúdo.

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

<<<<<<< HEAD
Depois vá para o seu painel de controle da Vercel e crie um novo site com o repositório.
=======
Then go to your Vercel dashboard and create a new site with the repository.
>>>>>>> 9b64ca249c101e7e425d7ca81aebba12658b9b97

### GitHub Pages

- [GitHub Pages](https://pages.github.com/)

<<<<<<< HEAD
Crie o arquivo `.github/workflows/deploy.yml` com o seguinte conteúdo para implantar seus slides no Github Pages pelo Github Actions.
=======
To deploy your slides on GitHub Pages:
- upload all the files of the project in your repo (i.e. named `name_of_repo`)
- create `.github/workflows/deploy.yml` with following content to deploy your slides to GitHub Pages via GitHub Actions. In this file, replace `<name_of_repo>` with `name_of_repo`. Make sure to leave the leading and trailing slashes in place.
>>>>>>> 9b64ca249c101e7e425d7ca81aebba12658b9b97

```yaml
name: Deploy pages

on:
  workflow_dispatch: {}
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    permissions:
      contents: read
      pages: write
      id-token: write

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - uses: actions/checkout@v3

      - uses: actions/setup-node@v3
        with:
          node-version: 'lts/*'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build -- --base /<name_of_repo>/

      - uses: actions/configure-pages@v3

      - uses: actions/upload-pages-artifact@v1
        with:
          path: dist

      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v2
```
- In your repository, go to Settings>Pages. Under "Build and deployment", select "Github Actions".
- Finally, after all workflows are executed, a link to the slides should appear under Settings>Pages.
