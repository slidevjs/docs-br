# Exportando

## Slides

### PDF

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

<<<<<<< HEAD
Após alguns segundos, seus slides estarão prontos em `./slides-exports.pdf`.
### Exportar etapas de cliques

> Disponível a partir da v0.21
=======
After a few seconds, your slides will be ready at `./slides-export.pdf`.

In case you want to export your slides using the dark version of the theme, use the `--dark` option:

```bash
$ slidev export --dark
```

#### Export Clicks Steps
>>>>>>> a89202a9190ecc9fbbd155cbeed518e8424e54e3

Por padrão, o Slidev exporta uma página por slide com as animações de clique desabilitadas. Se você quiser exportar slides com múltiplas etapas entre múltiplas páginas, passe a opção `--with-clicks`.

```bash
$ slidev export --with-clicks
```

### PNGs

Ao passar a opção `--format png`, o Slidev vai exportar imagens em PNG para cada slide em vez de PDF.

```bash
$ slidev export --format png
```

### Single-Page Application (SPA)

<<<<<<< HEAD
Veja [Hospedagem Estática](/guide/hosting).
=======
See [Static Hosting](/guide/hosting).

## Presenter notes

> Available since v0.36.8

Export only the presenter notes (the last comment block for each slide) into a text document in PDF.

```bash
$ slidev export-notes
```
>>>>>>> a89202a9190ecc9fbbd155cbeed518e8424e54e3
