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

Por padrão, o Slidev exporta uma página por slide com as animações de clique desabilitadas. Se você quiser exportar slides com múltiplas etapas entre múltiplas páginas, passe a opção `--with-clicks`.

```bash
$ slidev export --with-clicks
```

## PNGs
=======
After a few seconds, your slides will be ready at `./slides-export.pdf`.

### PNGs and Markdown
>>>>>>> 8024ec4e94d2cd81bc6d4a3efee822dde30d9054

Ao passar a opção `--format png`, o Slidev vai exportar imagens em PNG para cada slide em vez de PDF.

```bash
$ slidev export --format png
```

You can also compile a markdown file composed of compiled png using `--format md`.

```bash
$ slidev export --format md
```

### Dark mode

In case you want to export your slides using the dark version of the theme, use the `--dark` option:

```bash
$ slidev export --dark
```

### Export Clicks Steps

> Available since v0.21

By default, Slidev exports one page per slide with clicks animations disabled. If you want export slides with multiple steps into multiple pages, pass the `--with-clicks` option.

```bash
$ slidev export --with-clicks
```

### Slide range

You can also specify a range of slides to export with the `--range` option.

```bash
$ slidev export --range 1,4-5,6
```

### PDF outline

> Available since v0.36.10

You can generate the PDF outline by passing the `--with-toc` option.

```bash
$ slidev export --with-toc
```

### Output filename

You can specify the output filename with the `--output` option.

```bash
$ slidev export --output my-pdf-export
```

Or in the frontmatter configuration:

```yaml
---
exportFilename: my-pdf-export
---
```

### Export a range of slides

By default, all slides in the presentation are exported. If you want to export a specific slide or a range of slides you can set the `--range` option and specify which slides you would like to export. 

```bash
$ slidev export --range 1,6-8,10
```

This option accepts both specific slide numbers and ranges.

The example above would export slides 1,6,7,8, and 10.


### Multiple entries

You can also export multiple slides at once.

```bash
$ slidev export slides1.md slides1.md
```

Or

```bash
$ slidev export *.md
```

In this case, each input file will generate its own PDf file.

## Presenter notes

> Available since v0.36.8

Export only the presenter notes (the last comment block for each slide) into a text document in PDF.

```bash
$ slidev export-notes
```

This command also accept multiple entries like for the [export command](#multiple-entries)

## Single-Page Application (SPA)

<<<<<<< HEAD
Veja [Hospedagem Estática](/guide/hosting).
=======
See [Static Hosting](/guide/hosting).

## Troubleshooting

### Timeout

For big presentation you might want to increase the playwrigth timeout with `--timeout`

```bash
$ slidev export --timeout 60000
```

### Executable path

You can set the browser executable path for playwright using `--executable-path`

```bash
$ slidev export --executable-path [path_to_chromium]
```
>>>>>>> 8024ec4e94d2cd81bc6d4a3efee822dde30d9054
