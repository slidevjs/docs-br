<<<<<<< HEAD
# Animações
=======
---
outline: deep
---

# Animations
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2

## Animações no clique

> [!NOTE]
> Since v0.48.0, we are rewritten the click animations system with much more consistent behaviors. It might change the behaviors of your existing slides in edge cases. While this page is showing the new click system, you can find more details about the refactor in [#1279](https://github.com/slidevjs/slidev/pull/1279).

### `v-click`

Para aplicar "animações no clique" para os elementos, você pode usar a diretriz `v-click` ou os componentes `<v-click>`.

```md
<<<<<<< HEAD
# Olá

<!-- Uso do componente: isto ficará invisível até você pressionar "próximo" -->
<v-click>

Olá Mundo

</v-click>

<!-- Uso da diretriz: isto ficará invisível até você pressionar "próximo" pela segunda vez  -->
<div v-click class="text-xl p-2">

Eae!

</div>
=======
<!-- Component usage:
     this will be invisible until you press "next" -->

<v-click> Hello **World** </v-click>

<!-- Directive usage:
     this will be invisible until you press "next" the second time -->
<div v-click class="text-xl"> Hey! </div>
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2
```

### `v-after`

<<<<<<< HEAD
O uso do `v-after` é similar ao do `v-click`, mas ele tornará o elemento visível quando o `v-click` anterior tiver sido disparado.

```md
<div v-click>Olá</div>
<div v-after>Mundo</div>
```

Quando você clicar no botão "próximo", tanto `Olá` quanto `Mundo` aparecerão simultaneamente.
=======
`v-after` is only provided as a directive. It will turn the element visible when the previous `v-click` is triggered.

```md
<div v-click> Hello </div>
<div v-after> World </div>
```

When you press "next", both `Hello` and `World` will show up together.
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2

### Hide after clicking

<<<<<<< HEAD
Tem o mesmo comportamento do `v-click`, mas em vez de fazer o elemento aparecer, faz o elemento invisível após do clique.

```md
<div v-click-hide>Olá</div>
=======
Add a `.hide` modifier to `v-click` or `v-after` to make the element invisible after clicking, instead of showing up.

```md
<div v-click> Visible after 1 click </div>
<div v-click.hide> Hidden after 2 click </div>
<div v-after.hide> Hidden after 2 click </div>
```

For `v-click` component, you can use the `hide` prop to achieve the same effect:

```md
<v-click> Visible after 1 click </v-click>
<v-click hide> Hidden after 2 click </v-click>
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2
```

### `v-clicks`

<<<<<<< HEAD
`v-clicks` só é provido como um componente. É uma alternativa a aplicar a diretriz `v-click` em todos os elementos dentro dele. Ele é especialmente útil quando se está trabalhando com listas.
=======
`v-clicks` is only provided as a component. It's a shorthand to apply the `v-click` directive to all its child elements. It is especially useful when working with lists and tables.
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2

```md
<v-clicks>

- Item 1
- Item 2
- Item 3

</v-clicks>
```

<<<<<<< HEAD
Um item se tornará visível a cada vez que você clicar em "próximo".

### Contagem de Cliques Customizadas
=======
An item will become visible each time you click "next".
It accepts a `depth` prop for nested list:

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

Also, you can use the `every` prop to specify the number of items to show after each click:

```md
<v-clicks every="2">

- Item 1 (part 1)
- Item 1 (part 2)
- Item 2 (part 1)
- Item 2 (part 2)

</v-clicks>
```

### Positioning

By default, the clicking animations take place one by one. You can customize the animation position of elements by using the `at` prop or the `v-click` directive with value.

Like the CSS layout system, click-animated elements can be "relative" or "absolute":

#### Relative Position

This actual position of relative elements are calculated based on the previous relative elements:

````md
<div v-click> visible after 1 click </div>
<v-click at="+2"><div> visible after 3 clicks </div></v-click>
<div v-click.hide="'-1'"> hidden after 2 clicks </div>

```js {none|1|2}{at:'+5'}
1  // highlighted after 7 clicks
2  // highlighted after 8 clicks
```
````

> [!NOTE]
> The default value of `v-click` is `'+1'` when you don't specify it.

In fact, `v-after` are just shortcuts for `v-click` with `at` prop:

```md
<!-- The following 2 usages are equivalent -->
<img v-after />
<img v-click="'+0'" />

<!-- The following 3 usages are equivalent -->
<img v-click />
<img v-click="'+1'" />
<v-click-gap size="1" /><img v-after />
```

:::info
Only string values start with `'+'` or `'-'` like `'+1'` are treated as relative positions:

| Value          | Kind     |
| -------------- | -------- |
| `'-1'`, `'+1'` | Relative |
| `+1` === `1`   | Absolute |
| `'1'`          | Absolute |

So don't forget the single quotes for the relative values.
:::

#### Absolute Position

The given value is the exact click count to show the element:

````md
<div v-click="3"> visible after 3 clicks </div>
<v-click at="2"><div> visible after 2 clicks </div></v-click>
<div v-click.hide="1"> hidden after 1 click </div>

```js {none|1|2}{at:3}
1  // highlighted after 3 clicks
2  // highlighted after 4 clicks
```
````

#### Mixed Case

You can mix the absolute and relative positions:

```md
<div v-click> visible after 1 click </div>
<div v-click="3"> visible after 3 clicks </div>
<div v-click> visible after 2 click </div>
<div v-click="'-1'"> visible after 1 click </div>
<div v-click="4"> visible after 4 clicks </div>
```

The following example synchronizes the highlighting of the two code blocks:

````md
```js {1|2}{at:1}
1 + 1
'a' + 'b'
```

```js {1|2}{at:1}
2
'ab'
```
````

### Enter & Leave

> Available since v0.43.0

You can also specify the enter and leave index for the `v-click` directive by passing an array. The end index is exclusive.

```md
<div v-click="[2, 4]">This will be shown on the 2nd and 3rd clicks, and hide again after the 4th.</div>
```

### Custom Total Clicks Count
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2

Por padrão, o Slidev calcula quantos passos são necessários antes de passar para o próximo slide. Você pode sobrepor está configuração informando a propriedade `clicks` no frontmatter:

```yaml
---
# 10 cliques neste slide, antes de passar para o próximo
clicks: 10
---
```

<<<<<<< HEAD
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
=======
### Element Transitions
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2

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

<<<<<<< HEAD
Você pode substituí-las no seu CSS customizado para alterar os efeitos de transição. 

Por exemplo, você pode conseguir uma transição de aumentar a escala assim:
=======
You can override them to customize the transition effects in your custom stylesheets.

For example, you can achieve the scaling up transitions by:
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2

```css
/* styles.css */

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

<<<<<<< HEAD
## Movimento
=======
## Rough Markers

> Available since v0.48.0

Slidev integrates [Rough Notation](https://github.com/linkstrifer/react-rough-notation) to allow marking or highlighting elements in your slides.

### `v-mark`

Rough Notation integrates comes with the `v-mark` directive.

#### Type

`v-mark.underline` for Underline mark, `v-mark.circle` for Circle mark, etc. Default to `underline`

#### Color

`v-mark.red` make the notation `red`. Supported builtin color themes from UnoCSS. For custom colors, use object syntax `v-mark="{ color: '#234' }"`

#### Clicks

`v-mark` works like `v-click` and will trigger after a click. Same as `v-click`, it allows you to pass a custom click value, like `v-mark="5"` or `v-mark="'+1'"`.

#### Options

Optionally you can pass an object to `v-mark` to specify the options, for example:

```vue
<span v-mark="{ at: 5, color: '#234', type: 'circle' }">
Important text
</span>
```

#### Preview

<video src="https://github.com/slidevjs/slidev/assets/11247099/c840340c-0aa1-4cde-b228-e6c67e5f6879" rounded-lg shadow controls></video>

## Motion
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2

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

<<<<<<< HEAD
Saiba mais: [Demonstração](https://sli.dev/demo/starter/7) | [@vueuse/motion](https://motion.vueuse.org/) | [v-motion](https://motion.vueuse.org/directive-usage.html) | [Presets](https://motion.vueuse.org/presets.html)

## Transições de Página

> O suporte integrado para transição entre slides AINDA NÂO é provido na versão atual. Estamos planejando adicionar o suporte na próxima versão principal. Até lá, você ainda pode usar estilos customizados e bibliotecas para fazer isso.
=======
Learn mode: [Demo](https://sli.dev/demo/starter/7) | [@vueuse/motion](https://motion.vueuse.org/) | [v-motion](https://motion.vueuse.org/features/directive-usage) | [Presets](https://motion.vueuse.org/features/presets)

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
- `view-transition` - Slides with the view transitions API

### View Transitions

> Available since v0.43.0

The **View Transitions API** provides a mechanism for easily creating animated transitions between different DOM states. Learn more how it works in [View Transitions API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API).

:::warning
Experimental: This is not supported by all browsers. Check the [Browser compatibility table](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API#browser_compatibility) carefully before using this.
:::

You can use the `view-transition-name` CSS property to name view transitions, which creates connections between different page elements and smooth transitions when switching slides.

You can enable [MDC (Markdown Component) Syntax](/guide/syntax#mdc-syntax) support to conveniently name view-transitions:

```md
---
transition: view-transition
mdc: true
---

# View Transition {.inline-block.view-transition-title}

---

# View Transition {.inline-block.view-transition-title}
```

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
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2
