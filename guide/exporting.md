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
>>>>>>> dbdc820c8574243d4ae38131ae2a53f6a35a9104

Por padrão, o Slidev exporta uma página por slide com as animações de clique desabilitadas. Se você quiser exportar slides com múltiplas etapas entre múltiplas páginas, passe a opção `--with-clicks`.

```bash
$ slidev export --with-clicks
```

### PNGs

Ao passar a opção `--format png`, o Slidev vai exportar imagens em PNG para cada slide em vez de PDF.

```bash
$ slidev export --format png
```

### Export a range of slides

By default, all slides in the presentation are exported. If you want to export a specific slide or a range of slides you can set the `--range` option and specify which slides you would like to export. 

```bash
$ slidev export --range 1,6-8,10
```

This option accepts both specific slide numbers and ranges.

The example above would export slides 1,6,7,8, and 10. 

## Presenter notes

> Available since v0.36.8

Export only the presenter notes (the last comment block for each slide) into a text document in PDF.

```bash
$ slidev export-notes
```

## Single-Page Application (SPA)

Veja [Hospedagem Estática](/guide/hosting).
