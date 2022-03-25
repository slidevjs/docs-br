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

<<<<<<< HEAD
> Disponível a partir da v0.21
=======
In case you want to export your slides using the dark version of the theme, use the `--dark` option:

```bash
$ slidev export --dark
```

### Export Clicks Steps
>>>>>>> d68398ac58d3e8efc2f6d29119938f4a4382f617

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

Veja [Hospedagem Estática](/guide/hosting).
