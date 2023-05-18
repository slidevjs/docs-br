# FAQ

## Grids

Já que o Slidev é baseado na Web, você pode aplicar qualquer layout de grid como quiser. [CSS Grids](https://css-tricks.com/snippets/css/complete-guide-grid/), [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), ou até [Masonry](https://css-tricks.com/native-css-masonry-layout-in-css-grid/), você tem total controle.

Como nós temos o [Windi CSS](https://windicss.org/) integrado, aqui vai um jeito simples de você fazer isso:

```html
<div class="grid grid-cols-2 gap-4">
<div>

A primeira coluna

</div>
<div>

A segunda coluna

</div>
</div>
```

Vá além, você pode customizar o tamanho de cada coluna assim:

```html
<div class="grid grid-cols-[200px_1fr_10%] gap-4">
<div>

A primeira coluna (200px)

</div>
<div>

A segunda coluna (ajuste automático)

</div>
<div>

A terceira coluna (10% da largura do elemento pai)

</div>
</div>
```

<<<<<<< HEAD
Aprenda mais sobre [Windi CSS Grids](https://windicss.org/utilities/grid.html).
=======
Learn more about [Windi CSS Grids](https://windicss.org/utilities/layout/grid.html).
>>>>>>> 7acc3394a2458462d04fe918c5d45c5414a749e6

## Posicionamento

Os slides são definidos em um tamanho fixo (padrão `980x552px`) e se ajusta para caber na tela do usuário. Você pode tranquilamente usar posições absolutas em seus slides e elas serão expandidas com a tela.

Por exemplo:

```html
<div class="absolute left-30px bottom-30px">
Este é um rodapé alinhado no canto inferior esquerdo
</div>
```

Para alterar o tamanho do canvas, você pode passar a opção `canvasWidth` no seu primeiro frontmatter:

```yaml
---
canvasWidth: 800
---
```

## Tamanho da Fonte

Se você sentir que o tamanho da fonte nos seus slides estão muito pequenas, você pode ajustá-lo de algumas formas:

### Substituir o Estilo Local

Você pode sobrepor estilos em cada slide com a tag `<style>`.

```md
# Página 1

<style>
h1 {
  font-size: 10em;
}
</style>

---

# Página 2

Este aqui não será afetado.
```

Saiba mais: [Estilos Integrados](/guide/syntax.html#estilos-integrados)

### Substituir o Estilo Global

Você pode fornecer estilos globais customizados criando um arquivo `./style.css`, por exemplo:

```css
/* style.css */ 

h1 {
  font-size: 10em !important;
}
```

Saiba mais: [Estilo Global](/custom/directory-structure.html#estilo)

### Dimensionar a Área

Mudar o tamanho da área (canvas) vai escalar todos os seus conteúdos (textos, imagens, componentes, etc.) e slides.

```yaml
---
# padrão: 980
# como a área fica menor, o tamanho visual vai ficar maior
canvasWidth: 800
---
```

### Usar o Transform

Nós disponibilizamos um componente integrado chamado `<Transform />`, que é uma pequena altenativa que engloba a propriedade transform do CSS.

```md
<Transform :scale="1.4">

- Item 1
- Item 2

</Transform>
```
