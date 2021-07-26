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
> echo 'shamefully-flatten=true' >> .npmrc
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

Se você precisar de uma maneira rápida de rodar uma apresentação com container, você pode usar a imagem do [docker](https://hub.docker.com/r/stig124/slidev) mantida por [stig124](https://github.com/Stig124), ou construir sua própria.

Consulte o [repositório do slidevjs/container](https://github.com/slidevjs/container) para mais detalhes.
