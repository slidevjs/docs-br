# Primeiros Passos

## Introdução

<<<<<<< HEAD
Slidev <sup>(slide + dev, `/slʌɪdɪv/`)</sup> é uma ferramenta baseada em tecnologias web para criar e apresentar slides. O Slidev foi projetado para desenvolvedores focarem em escrever conteúdo em Markdown e ainda ter o poder do HTML e dos componentes do Vue para fornecer layouts e designs perfeitos com demonstrações interativas de suas apresentações.
=======
Slidev <sup>(slide + dev, **/slʌɪdɪv/**)</sup> is a web-based slides maker and presenter. It's designed for developers to focus on writing content in Markdown while also having the power of HTML and Vue components to deliver pixel-perfect layouts and designs with embedded interactive demos in your presentations.
>>>>>>> 8d6e5c8c26cd8e0bdf78481faddcc258dab98b3c

É usado um arquivo Markdown cheio de recursos para gerar slides bonitos com uma experiência de *refresh* instantâneo, além de várias integrações embutidas como desenvolvimento de código em tempo real, exportação pra PDF, gravação da apresentação, e assim por diante. Como tem como base tecnologias da web, você pode fazer tudo com o Slidev - as possibilidades são infinitas.

Você pode saber mais sobre a lógica por trás do projeto na seção [Por que Slidev](/guide/why).

### Funcionalidades

<<<<<<< HEAD
- 📝 [**Baseado em markdown**](/guide/syntax.html) - use seus editores fluxos de trabalho favoritos
- 🧑‍💻 [**Feito para desenvolvedores**](/guide/syntax.html#blocos-de-codigo) - destaque de sintaxe integrado, desenvolvimento de código em tempo real, etc.
- 🎨 [**Suporte a Temas**](/themes/gallery.html) - temas podem ser compartilhados e usados com pacotes do npm
- 🌈 [**Estiloso**](/guide/syntax.html#estilos-embutidos) - utilidades do [Windi CSS](https://windicss.org/) sob demanda, fácil incorporação de CSS
- 🤹 [**Interativo**](/custom/directory-structure.html#componentes) - suporta perfeitamente a incorporação de componentes do Vue
- 🎙 [**Modo Apresentador**](/guide/presenter-mode.html) - use outra janela, ou até mesmo seu celular para controlar seus slides
- 🎨 [**Desenhos**](/guide/drawing.html) - desenhe e anote em seus slides
- 🧮 [**LaTeX**](/guide/syntax.html#latex) - suporte integrado à equações matemáticas em LaTeX
- 📰 [**Diagramas**](/guide/syntax.html#diagramas) - cria diagramas com descrições em texto
- 🌟 [**Ícones**](/guide/syntax.html#icones) - acesse ícones de qualquer conjunto diretamente
- 💻 [**Editores**](/guide/editors.html) - editor integrado, ou uma [extensão para o VS Code](https://github.com/slidevjs/slidev-vscode)
- 🎥 [**Gravação**](/guide/recording.html) - gravação integrada e visão da câmera
- 📤 [**Portátil**](/guide/exporting.html) - exporte para PDF, PNGs, ou até mesmo uma aplicação SPA hospedável
- ⚡️ [**Rápido**](https://vitejs.dev) - *refresh* instantâneo provido pelo [Vite](https://vitejs.dev)
- 🛠 [**Customizável**](/custom/config-vite.html) - usando plug-ins do Vite, componentes do Vue, ou qualquer pacote do npm
=======
- 📝 [**Markdown-based**](/guide/syntax.html) - use your favorite editors and workflow
- 🧑‍💻 [**Developer Friendly**](/guide/syntax.html#code-blocks) - built-in syntax highlighting, live coding, etc.
- 🎨 [**Themable**](/themes/gallery.html) - theme can be shared and used with npm packages
- 🌈 [**Stylish**](/guide/syntax.html#embedded-styles) - on-demand utilities via [Windi CSS](https://windicss.org/) or [UnoCSS](https://github.com/unocss/unocss).
- 🤹 [**Interactive**](/custom/directory-structure.html#components) - embedding Vue components seamlessly
- 🎙 [**Presenter Mode**](/guide/presenter-mode.html) - use another window, or even your phone to control your slides
- 🎨 [**Drawing**](/guide/drawing.html) - draw and annotate on your slides
- 🧮 [**LaTeX**](/guide/syntax.html#latex) - built-in LaTeX math equations support
- 📰 [**Diagrams**](/guide/syntax.html#diagrams) - creates diagrams with textual descriptions 
- 🌟 [**Icons**](/guide/syntax.html#icons) - Access to icons from any iconset directly
- 💻 [**Editors**](/guide/editors.html) - integrated editor, or [extension for VS Code](https://github.com/slidevjs/slidev-vscode)
- 🎥 [**Recording**](/guide/recording.html) - built-in recording and camera view
- 📤 [**Portable**](/guide/exporting.html) - export into PDF, PNGs, or even a hostable SPA
- ⚡️ [**Fast**](https://vitejs.dev) - instant reloading powered by [Vite](https://vitejs.dev)
- 🛠 [**Hackable**](/custom/config-vite.html) - using Vite plugins, Vue components, or any npm packages
>>>>>>> 8d6e5c8c26cd8e0bdf78481faddcc258dab98b3c

### Tecnologias

O Slidev é possível pela combinação dessas ferramentes e tecnologias.

<<<<<<< HEAD
- [Vite](https://vitejs.dev) - Uma ferramenta para front-end extremamente rápida
- [Vue 3](https://v3.vuejs.org/) com [Markdown](https://daringfireball.net/projects/markdown/syntax) - Foco no conteúdo a ainda ter o poder do HTML e dos componentes do Vue quando precisar
- [Windi CSS](https://github.com/windicss/windicss) - Framework CSS com utilidades sob demanda, estilize seus slides com facilidade
- [Prism](https://github.com/PrismJS/prism), [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) - Suporte a blocos de código como codificação em tempo real
- [RecordRTC](https://recordrtc.org) - Gravação e visão da câmera integrados
- Família [VueUse](https://vueuse.org) -  [`@vueuse/core`](https://github.com/vueuse/vueuse), [`@vueuse/head`](https://github.com/vueuse/head), [`@vueuse/motion`](https://github.com/vueuse/motion), etc.
- [Iconify](https://iconify.design/) - Coleção de ícones.
- [Drauu](https://github.com/antfu/drauu) - Suporte à desenhos e anotações
- [KaTeX](https://katex.org/) - Renderização do LaTeX.
- [Mermaid](https://mermaid-js.github.io/mermaid) - Diagramas baseados em texto.
=======
- [Vite](https://vitejs.dev) - An extremely fast frontend tooling
- [Vue 3](https://v3.vuejs.org/) powered [Markdown](https://daringfireball.net/projects/markdown/syntax) - Focus on the content while having the power of HTML and Vue components whenever needed
- [Windi CSS](https://github.com/windicss/windicss) or [UnoCSS](https://github.com/unocss/unocss) - On-demand utility-first CSS framework, style your slides at ease
- [Prism](https://github.com/PrismJS/prism), [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) - First-class code snippets support with live coding capability
- [RecordRTC](https://recordrtc.org) - Built-in recording and camera view
- [VueUse](https://vueuse.org) family -  [`@vueuse/core`](https://github.com/vueuse/vueuse), [`@vueuse/head`](https://github.com/vueuse/head), [`@vueuse/motion`](https://github.com/vueuse/motion), etc.
- [Iconify](https://iconify.design/) - Iconsets collection.
- [Drauu](https://github.com/antfu/drauu) - Drawing and annotations support
- [KaTeX](https://katex.org/) - LaTeX math rendering.
- [Mermaid](https://mermaid-js.github.io/mermaid) - Textual Diagrams.
>>>>>>> 8d6e5c8c26cd8e0bdf78481faddcc258dab98b3c

### Criando Sua Primeira Apresentação

<br>

#### Experimente online

[sli.dev/new](https://sli.dev/new)

[![](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://sli.dev/new)

#### Crie Localmente

Com NPM:

```bash
$ npm init slidev
```

Com Yarn:

```bash
$ yarn create slidev
```

Siga as instruções e comece a fazer seus slides agora mesmo! Para mais detalhes sobre a sintaxe do markdown, dê uma olhada no [guia de sintaxe](/guide/syntax).

### Interface de Linha de Comando

Em um projeto onde o Slidev está instalado, você pode usar o binário `slidev` nos seus scripts do npm.

```json
{
  "scripts": {
    "dev": "slidev", // inicia um servidor para desenvolvimento
    "build": "slidev build", // compila a aplicação SPA para produção
    "export": "slidev export" // exporta seus slides para pdf
  }
}
```

Você também pode usá-lo com o [`npx`](https://www.npmjs.com/package/npx)

```bash
$ npx slidev
```

Rode `slidev --help` para mais opções disponíveis.

### Sintaxe do Markdown

O Slidev lê o seu arquivo `slides.md` na raiz do seu projeto e o converte em slides. A qualquer alteração que você faça nele, o conteúdo dos slides serão atualizados imediatamente. Por exemplo:

~~~md
# Slidev

Olá Mundo

---

# Página 2

Use blocos de código diretamente para o destaque

//```ts
console.log('Olá, Mundo!')
//```

---

# Página 3
~~~

Leia mais sobre a sintaxe Markdown do Slidev no [guia de sintaxe](/guide/syntax).
