# Instalação

## Modelo Inicial

<<<<<<< HEAD
> Slidev requer [**Node.js >=14.0**](https://nodejs.org/)
=======
> Slidev requires [**Node.js >=18.0**](https://nodejs.org/)
>>>>>>> 7a04557f35275398f1e4314e782f6a42936f7152

O melhor jeito de começar é usando nosso modelo oficial.

<<<<<<< HEAD
Com NPM:
=======
::: code-group
>>>>>>> 7a04557f35275398f1e4314e782f6a42936f7152

```bash [npm]
npm init slidev@latest
```

<<<<<<< HEAD
Com Yarn:

```bash
$ yarn create slidev
```

Siga as instruções e vai abrir automaticamente pra você uma apresentação de slides em http://localhost:3030/.
=======
```bash [yarn]
yarn create slidev
```

```bash [pnpm]
pnpm create slidev
```

:::

Follow the prompts and it will open up the slideshow at `http://localhost:3030/` automatically for you.
>>>>>>> 7a04557f35275398f1e4314e782f6a42936f7152

A apresentação também contém a configuração básica e uma breve demonstração de como começar com o Slidev.

## Instalação Manual

Se ainda assim preferir instalar o Slidev manualmente ou se quiser integrá-lo em seus projetos existentes, você pode fazer assim:

```bash
npm install @slidev/cli @slidev/theme-default
```
```bash
touch slides.md
```
```bash
npx slidev
```

<<<<<<< HEAD
> Observe que se você estiver usando o [pnpm](https://pnpm.io), será necessário habilitar a opção [shamefully-hoist](https://pnpm.io/npmrc#shamefully-hoist) para que o Slidev funcione corretamente:
>
> ```bash
> echo 'shamefully-flatten=true' >> .npmrc
> ```

## Instalação Global
=======
## Install Globally
>>>>>>> 7a04557f35275398f1e4314e782f6a42936f7152

> Disponível a partir da v0.14

Você pode instalar o Slidev globalmente com o seguinte comando

```bash
npm i -g @slidev/cli
```

E agora você pode usar comando `slidev` em qualquer lugar sem ter que criar um projeto toda hora.

```bash
npx slidev
```

Este comando também vai tentar o `@slidev/cli` local se ele for encontrado nos `node_modules`.

## Instalação no Docker

<<<<<<< HEAD
Se você precisar de uma maneira rápida de rodar uma apresentação com container, você pode usar a imagem do [docker](https://hub.docker.com/r/stig124/slidev) mantida por [stig124](https://github.com/Stig124), ou construir sua própria.

Consulte o [repositório do slidevjs/container](https://github.com/slidevjs/container) para mais detalhes.
=======
If you need a rapid way to run a presentation with containers, you can use the prebuilt [docker](https://hub.docker.com/r/tangramor/slidev) image maintained by [tangramor](https://github.com/tangramor), or build your own.

Just run following command in your work folder:

```bash
docker run --name slidev --rm -it \
    --user node \
    -v ${PWD}:/slidev \
    -p 3030:3030 \
    tangramor/slidev:latest
```

If your work folder is empty, it will generate a template `slides.md` and other related files under your work folder, and launch the server on port `3030`.

You can access your slides from `http://localhost:3030/`

### Build deployable image

Or you can create your own slidev project to a docker image with Dockerfile:

```Dockerfile
FROM tangramor/slidev:latest

ADD . /slidev

```

Create the docker image: `docker build -t myppt .`

And run the container: `docker run --name myslides --rm --user node -p 3030:3030 myppt`

You can visit your slides from `http://localhost:3030/`

### Build hostable SPA (Single Page Application)

Run command `docker exec -i slidev npx slidev build` on the running container `slidev`. It will generate static HTML files under `dist` folder.

#### Host on Github Pages

You can host `dist` in a static web site such as [Github Pages](https://tangramor.github.io/slidev_docker/) or Gitlab Pages.

Because in Github pages the url may contain subfolder, so you need to modify the generated `index.html` to change `href="/assets/xxx` to `href="./assets/xxx`. Or you may use `--base=/<subfolder>/` option during the build process, such as: `docker exec -i slidev npx slidev build --base=/slidev_docker/`.

And to avoid Jekyll build process, you need to add an empty file `.nojekyll`.

#### Host by docker

You can also host it by yourself with docker:

```bash
docker run --name myslides --rm -p 80:80 -v ${PWD}/dist:/usr/share/nginx/html nginx:alpine
```

Or create a static image with following Dockerfile:

```Dockerfile
FROM nginx:alpine

COPY dist /usr/share/nginx/html
```

Create the docker image: `docker build -t mystaticppt .`

And run the container: `docker run --name myslides --rm -p 80:80 mystaticppt`

You can visit your slides from http://localhost/

Refer to the [tangramor/slidev_docker](https://github.com/tangramor/slidev_docker) for more details.

## Command Line Interface (CLI)

`@slidev/cli` Expose a few commands you can use with `npx slidev ...` or by adding scripts in your `package.json`:
```json
{
  "script": {
    "dev": "slidev"
  }
}
```

In that case you will be able to run `npm run dev`.

You can pass options to any commands:

* boolean option are `true` if they are present, false otherwise (example: `slidev --open`)
* some options can have values you can add just after the option or by using the `=` character (example: `slidev --port 8080` or `slidev --port=8080`)

If you use npm scripts, don't forget to add `--` after the npm command:
```bash
npm run slidev -- --open
```

### `slidev [entry]`

Start a local server for Slidev.

* `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.

Options:

* `--port`, `-p` (`number`, default: `3030`): port number.
* `--open`, `-o` (`boolean`, default: `false`): open in browser.
* `--remote [password]` (`string`): listen to public host and enable remote control, if a value is passed then the presenter mode is private and only accessible by passing the given password in the URL query `password` parameter.
* `--log` (`'error', 'warn', 'info', 'silent'`, default: `'warn'`): Log level.
* `--force`, `-f` (`boolean`, default `false`): force the optimizer to ignore the cache and re-bundle.
* `--theme`, `-t` (`string`): override theme.

### `slidev build [entry]`

Build hostable SPA.

* `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.

Options:

* `--watch`, `-w` (`boolean`, default: `false`): build watch.
* `--out`, `-o` (`string`, default: `dist`): output dir.
* `--base` (`string`, default: `/`): base URL (see https://cli.vuejs.org/config/#publicpath)
* `--download` (`boolean`, default: `false`): allow to download the slides as PDF inside the SPA.
* `--theme`, `-t` (`string`): override theme.

### `slidev export [entry]`

Export slides to PDF (or other format).

* `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.

Options:

* `--output` (`string`, default: use `exportFilename` (see https://sli.dev/custom/#frontmatter-configures) or use `[entry]-export`): path to the output.
* `--format` (`'pdf', 'png', 'md'`, default: `'pdf'`): output format.
* `--timeout` (`number`, default: `30000`): timeout for rendering the print page (see https://playwright.dev/docs/api/class-page#page-goto).
* `--range` (`string`): page ranges to export (example: `'1,4-5,6'`).
* `--dark` (`boolean`, default: `false`): export as dark theme.
* `--with-clicks`, `-c` (`boolean`, default: `false`): export pages for every clicks (see https://sli.dev/guide/animations.html#click-animations).
* `--theme`, `-t` (`string`): override theme.

### `slidev format [entry]`

Format the markdown file.

* `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.

### `slidev theme [subcommand]`

Theme related operations.

Subcommands:

* `eject [entry]`: Eject current theme into local file system
  * `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.
  * Options:
    * `--dir` (`string`, default: `theme`): output dir.
    * `--theme`, `-t` (`string`): override theme.
>>>>>>> 7a04557f35275398f1e4314e782f6a42936f7152
