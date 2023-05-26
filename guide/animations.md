# Animações

## Animações no clique

### `v-click`

Para aplicar "animações no clique" para os elementos, você pode usar a diretriz `v-click` ou os componentes `<v-click>`.

```md
# Olá

<!-- Uso do componente: isto ficará invisível até você pressionar "próximo" -->
<v-click>

Olá Mundo

</v-click>

<!-- Uso da diretriz: isto ficará invisível até você pressionar "próximo" pela segunda vez  -->
<div v-click class="text-xl p-2">

Eae!

</div>
```

### `v-after`

O uso do `v-after` é similar ao do `v-click`, mas ele tornará o elemento visível quando o `v-click` anterior tiver sido disparado.

```md
<div v-click>Olá</div>
<div v-after>Mundo</div>
```

Quando você clicar no botão "próximo", tanto `Olá` quanto `Mundo` aparecerão simultaneamente.

### `v-click-hide`

Tem o mesmo comportamento do `v-click`, mas em vez de fazer o elemento aparecer, faz o elemento invisível após do clique.

```md
<div v-click-hide>Olá</div>
```

### `v-clicks`

`v-clicks` só é provido como um componente. É uma alternativa a aplicar a diretriz `v-click` em todos os elementos dentro dele. Ele é especialmente útil quando se está trabalhando com listas.

```md
<v-clicks>

- Item 1
- Item 2
- Item 3
- Item 4

</v-clicks>
```

Um item se tornará visível a cada vez que você clicar em "próximo".

<<<<<<< HEAD
### Contagem de Cliques Customizadas
=======
It accepts a `depth` props for nested list:

```md
<v-clicks depth="2">

- Item 1
  - Item 1.1
  - Item 1.2
- Item 2
  - Item 2.1
  - Item 2.2

</v-clicks>
```

### Custom Clicks Count
>>>>>>> 19d3ad78801d41f8e35b2c2f4cbeecc8b90afaea

Por padrão, o Slidev calcula quantos passos são necessários antes de passar para o próximo slide. Você pode sobrepor está configuração informando a propriedade `clicks` no frontmatter:

```yaml
---
# 10 cliques neste slide, antes de passar para o próximo
clicks: 10
---
```

### Ordenação

Passando o índice o clique nas suas diretrizes, você pode customizar a ordem dos aparecimentos.

```md
<div v-click>1</div>
<div v-click>2</div>
<div v-click>3</div>
```

```md
<!-- a ordem é inversa -->
<div v-click="3">1</div>
<div v-click="2">2</div>
<div v-click="1">3</div>
```

```md
---
clicks: 3
---

<!-- visível após 3 cliques -->
<v-clicks at="3">
  <div>Oi</div>
</v-clicks>
```

### Transição de Elementos

Quando você aplica a diretriz `v-click` aos seus elementos, a eles serão anexados a classe `slidev-vclick-target`. Quando os elementos estão ocultos, a classe `slidev-vclick-hidden` também será anexada. Por exemplo:

```html
<div class="slidev-vclick-target slidev-vclick-hidden">Texto</div>
```

Após o clique, isto se tornará

```html
<div class="slidev-vclick-target">Texto</div>
```

Por padrão, uma transição suave de opacidade é aplicada à essas classes:

```css
// o padrão

.slidev-vclick-target {
  transition: opacity 100ms ease;
}

.slidev-vclick-hidden {
  opacity: 0;
  pointer-events: none;
}
```

Você pode substituí-las no seu CSS customizado para alterar os efeitos de transição. 

Por exemplo, você pode conseguir uma transição de aumentar a escala assim:

```css
// styles.css

.slidev-vclick-target {
  transition: all 500ms ease;
}

.slidev-vclick-hidden {
  transform: scale(0);
}
```

Para especificar animações para um único slide ou layout definido:

```scss
.slidev-page-7,
.slidev-layout.my-custom-layout {
  .slidev-vclick-target {
    transition: all 500ms ease;
  }

  .slidev-vclick-hidden {
    transform: scale(0);
  }
}
```

Aprenda mais sobre a [customização de estilo](/custom/directory-structure#estilo).

## Movimento

O Slidev tem o [@vueuse/motion](https://motion.vueuse.org/) integrado. Você pode usar a diretriz `v-motion` em qualquer elemento para aplicar movimento a ele. Por exemplo:

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }">
  Slidev
</div>
```

O texto `Slidev` se moverá de `-80px` até sua posição original na inicialização.

> Nota: Slidev pré-carrega o próximo slide por performance, o que significa que as animações podem começar antes de você navegar até a página. Para fazer as animações funcionarem corretamente, você pode desabilitar o pré-carregamento no slide em particular.
>
> ```md
> ---
> preload: false
> ---
> ```
>
> Ou manipular o ciclo de vida do elemento com o `v-if` para ter mais controle:
>
> ```html
> <div
>   v-if="$slidev.nav.currentPage === 7"
>   v-motion
>   :initial="{ x: -80 }"
>   :enter="{ x: 0 }">
>   Slidev
> </div>
> ```

Saiba mais: [Demonstração](https://sli.dev/demo/starter/7) | [@vueuse/motion](https://motion.vueuse.org/) | [v-motion](https://motion.vueuse.org/directive-usage.html) | [Presets](https://motion.vueuse.org/presets.html)

<<<<<<< HEAD
## Transições de Página

> O suporte integrado para transição entre slides AINDA NÂO é provido na versão atual. Estamos planejando adicionar o suporte na próxima versão principal. Até lá, você ainda pode usar estilos customizados e bibliotecas para fazer isso.
=======
## Slide Transitions

<div id="pages-transitions" />

> Available since v0.39.0

Slidev supports slide transitions out of the box. You can enable it by setting the `transition` frontmatter option:

```md
---
transition: slide-left
---
```

This will give you a nice sliding effects on slide switching. Setting it in the frontmatter will apply to all slides. You can also set different transition per slide.

### Builtin Transitions

- `fade` - Crossfade in/out
- `fade-out` - Fade out and then fade in
- `slide-left` - Slides to the left (slide to right when going backward)
- `slide-right` - Slides to the right (slide to left when going backward)
- `slide-up` - Slides to the top (slide to bottom when going backward)
- `slide-down` - Slides to the bottom (slide to top when going backward)

### Custom Transitions

Slidev's slide transitions are powered by [Vue Transition](https://vuejs.org/guide/built-ins/transition.html). You can provide your custom transitions by:

```md
---
transition: my-transition
---
```

and then in your custom stylesheets:

```css
.my-transition-enter-active,
.my-transition-leave-active {
  transition: opacity 0.5s ease;
}

.my-transition-enter-from,
.my-transition-leave-to {
  opacity: 0;
}
```

Learn more how it works in [Vue Transition](https://vuejs.org/guide/built-ins/transition.html).

### Forward & Backward Transitions

You can specify different transitions for forward and backward navigation using `|` as a separator in the transition name:

```md
---
transition: go-forward | go-backward
---
```

With this, when you go from slide 1 to slide 2, the `go-forward` transition will be applied. When you go from slide 2 to slide 1, the `go-backward` transition will be applied.

### Advanced Usage

The `transition` field accepts an option that will passed to the [`<TransitionGroup>`](https://vuejs.org/api/built-in-components.html#transition) component. For example:

```md
---
transition:
  name: my-transition
  enterFromClass: custom-enter-from
  enterActiveClass: custom-enter-active
---
```
>>>>>>> 19d3ad78801d41f8e35b2c2f4cbeecc8b90afaea
