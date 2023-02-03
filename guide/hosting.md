<<<<<<< HEAD
# Hospedagem Estática
=======

# Static Hosting
>>>>>>> 38e076f9a7c55cbd4d7b58579eecb54e77e9723a

## Compilando Single Page Applications (SPA)

Você também pode compilar os slides em uma aplicação SPA auto-hospedável:

```bash
$ slidev build
```

A aplicação gerada estará disponível na pasta `dist/` e a partir daí você pode hospedá-la no [GitHub Pages](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/), ou em qualquer outra plataforma que preferir. Agora você pode compartilhar seus slides com o todo mundo com um único link.

### Diretório Base

Para implantar seus slides em sub-rotas, você precisará passar a opção `--base`. Por exemplo:

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
>>>>>>> 38e076f9a7c55cbd4d7b58579eecb54e77e9723a

```md
---
download: 'https://myside.com/my-talk.pdf'
---
```

## Exemplos

Aqui estão alguns exemplos de aplicações SPA exportadas:

- [Starter Template](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) por [Anthony Fu](https://github.com/antfu)

Para mais, veja a [Galeria](/showcases).

## Hospedando

<<<<<<< HEAD
Nós recomendamos usar o comando `npm init slidev@lastest` para iniciar seu projeto, que já contém as configurações necessárias para serviços de hospedagem.
=======
We recommend to use `npm init slidev@latest` to scaffold your project, which contains the necessary configuration files for hosting services out-of-the-box.
>>>>>>> 38e076f9a7c55cbd4d7b58579eecb54e77e9723a

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
>>>>>>> 38e076f9a7c55cbd4d7b58579eecb54e77e9723a

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
>>>>>>> 38e076f9a7c55cbd4d7b58579eecb54e77e9723a

## GitHub Pages

- [GitHub Pages](https://pages.github.com/)

<<<<<<< HEAD
Crie o arquivo `.github/workflows/deploy.yml` com o seguinte conteúdo para implantar seus slides no Github Pages pelo Github Actions.
=======
To deploy your slides on GitHub Pages:
- upload all the files of the project in your repo (i.e. named `name_of_repo`)
- create `.github/workflows/deploy.yml` with following content to deploy your slides to GitHub Pages via GitHub Actions. In this file, replace `<name_of_repo>` with `name_of_repo`.
>>>>>>> 38e076f9a7c55cbd4d7b58579eecb54e77e9723a

```yaml
name: Deploy pages
on: push
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '14'
      - name: Install dependencies
        run: npm install
      - name: Install slidev
        run:  npm i -g @slidev/cli
      - name: Build
        run: slidev build --base <name_of_repo>
      - name: Deploy pages
        uses: crazy-max/ghaction-github-pages@v2
        with:
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
- In your repository, go to Settings>Pages. Under "Build and deployment", select "Deploy from a branch", select "gh-pages" and "root". Click on save.
- Finally, after all workflows are executed, a link to the slides should appear under Settings>Pages.
