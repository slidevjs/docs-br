# Hospedagem Estática

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

O Slidev vai gerar um arquivo PDF na compilação e um botão de download aparecerá na aplicação SPA.

Você também pode prover uma URL customizada para o PDF. Nesse caso, o processo de renderização do arquivo será pulado.

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

Nós recomendamos usar o comando `npm init slidev@lastest` para iniciar seu projeto, que já contém as configurações necessárias para serviços de hospedagem.

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

Depois vá para o seu painel de controle do Netlify e crie um novo site com o repositório.

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

Depois vá para o seu painel de controle da Vercel e crie um novo site com o repositório.

## GitHub Pages

- [GitHub Pages](https://pages.github.com/)

Crie o arquivo `.github/workflows/deploy.yml` com o seguinte conteúdo para implantar seus slides no Github Pages pelo Github Actions.

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
      - name: Build
        run: npm run build
      - name: Deploy pages
        uses: crazy-max/ghaction-github-pages@v2
        with:
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
