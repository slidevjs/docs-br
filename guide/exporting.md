# Exportando

## PDF

> A exportação para PDF depende do [Playwright](https://playwright.dev) para renderizar. Você precisa instalar o [`playwright-chromium`](https://playwright.dev/docs/installation#download-single-browser-binary) primeiro para usar esta funcionalidade.
> Se você estiver fazendo exportações num ambiente de CI, [o guia do playwright para CI](https://playwright.dev/docs/ci) pode ser útil.

Instale o `playwright-chromium`

```bash
$ npm i -D playwright-chromium
```

Agora exporte seus slides para PDF usando o seguinte comando

```bash
$ slidev export
```

Após alguns segundos, seus slides estarão prontos em `./slides-exports.pdf`.
### Exportar etapas de cliques

> Disponível a partir da v0.21

Por padrão, o Slidev exporta uma página por slide com as animações de clique desabilitadas. Se você quiser exportar slides com múltiplas etapas entre múltiplas páginas, passe a opção `--with-clicks`.

```bash
$ slidev export --with-clicks
```

## PNGs

Ao passar a opção `--format png`, o Slidev vai exportar imagens em PNG para cada slide em vez de PDF.

```bash
$ slidev export --format png
```

## Single-Page Application (SPA)

Você também pode compilar os slides em uma aplicação SPA auto-hospedável:

```bash
$ slidev build
```

A aplicação gerada estará disponível na pasta `dist/` e aí você pode hospedá-la no [GitHub Pages](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/), ou em qualquer outra plataforma que preferir. Agora você pode compartilhar seus slides com o todo mundo com um único link.

### Diretório Base

Para implantar seus slides em sub-rotas, você precisará passar a opção `--base`. Por exemplo:

```bash
$ slidev build --base /palestras/minha-palestra-legal/
```

Consulte a [documentação do Vite](https://vitejs.dev/guide/build.html#public-base-path) para mais detalhes.

### Disponibilize um PDF para download

Você pode disponibilizar um PDF para download aos visitante da sua aplicação SPA com a seguinte configuração:

```md
---
download: true
---
```

O Slidev vai gerar um arquivo PDF junto com a compilação e um botão de download aparecerá na aplicação SPA.

Você também pode prover uma URL customizada para o PDF. Nesse caso, o processo de renderização do arquivo será pulado.

```md
---
download: 'https://myside.com/my-talk.pdf'
---
```

### Exemplos

Aqui estão alguns exemplos de aplicações SPA exportadas:

- [Starter Template](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) por [Anthony Fu](https://github.com/antfu)
