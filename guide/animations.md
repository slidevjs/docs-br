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

### Contagem de Cliques Customizadas

Por padrão, Slidev calcula quantos passos são necessários antes de passar para o próximo slide. Você pode sobrepor está configuração informando a propriedade `clicks` no frontmatter:

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

Por padrão, uma transição sutíl de opacidade é aplicada à essas classes:

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

Slidev tem o [@vueuse/motion](https://motion.vueuse.org/) integrado. Você pode usar a diretriz `v-motion` em qualquer elemento para aplicar movimento a ele. Por exemplo:

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

## Transições de Página

> O suporte integrado para transição entre slides AINDA NÂO é provido na versão atual. Estamos planejando adicionar o suporte na próxima versão principal. Até lá, você ainda pode usar estilos customizados e bibliotecas para fazer isso.
