# Instalação

## Modelo Inicial

> Slidev requer [**Node.js >=14.0**](https://nodejs.org/)

O melhor jeito de começar é usando nosso modelo oficial.

Com NPM:

```bash
$ npm init slidev@latest
```

Com Yarn:

```bash
$ yarn create slidev
```

Siga as instruções e vai abrir automaticamente pra você uma apresentação de slides em http://localhost:3030/.

A apresentação também contém a configuração básica e uma breve demonstração de como começar com o Slidev.

## Instalação Manual

Se ainda assim preferir instalar o Slidev manualmente ou se quiser integrá-lo em seus projetos existentes, você pode fazer assim:

```bash
$ npm install @slidev/cli @slidev/theme-default
```
```bash
$ touch slides.md
```
```bash
$ npx slidev
```

> Observe que se você estiver usando o [pnpm](https://pnpm.io), será necessário habilitar a opção [shamefully-hoist](https://pnpm.io/npmrc#shamefully-hoist) para que o Slidev funcione corretamente:
>
> ```bash
> echo 'shamefully-hoist=true' >> .npmrc
> ```

## Instalação Global

> Disponível a partir da v0.14

Você pode instalar o Slidev globalmente com o seguinte comando

```bash
$ npm i -g @slidev/cli
```

E agora você pode usar comando `slidev` em qualquer lugar sem ter que criar um projeto toda hora.

```bash
$ slidev
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

You can access your slides from http://localhost:3030/


### Build deployable image

Or you can create your own slidev project to a docker image with Dockerfile:

```Dockerfile
FROM tangramor/slidev:latest

ADD . /slidev

```

Create the docker image: `docker build -t myppt .`

And run the container: `docker run --name myslides --rm --user node -p 3030:3030 myppt`

You can visit your slides from http://localhost:3030/


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
>>>>>>> 030576270f137f7a9f12dda14c167d21a7eb432c
