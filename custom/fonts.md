# Fontes

> Disponível a partir da v0.20

Enquanto você pode usar HTML e CSS para customizar as fontes e estilos nos seus slides como preferir, o Slidev também provê um jeito conveniente de usá-los sem esforços.

No seu frontmatter, configure assim:

```yaml
---
fonts:
<<<<<<< HEAD
  # basicamente o texto
  sans: 'Robot'
  # use com a classe `font-serif` do windicss 
  serif: 'Robot Slab'
  # para blocos de código, códigos inline, etc.
  mono: 'Fira Code'
=======
  # basically the text
  sans: Robot
  # use with `font-serif` css class from UnoCSS
  serif: Robot Slab
  # for code blocks, inline code, etc.
  mono: Fira Code
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f
---
```

E é só isso.

As fontes serão **importadas automaticamente do [Google Fonts](https://fonts.google.com/)**. Isso significa que você está livre para usar qualquer fonte disponível no Google Fonts diretamente.

## Fontes Locais

<<<<<<< HEAD
Por padrão, o Slidev assume que todas as fontes especificadas por meio da configuração `fonts` vêm do Google Fonts. Se você quiser usar fontes locais, especifique o `fonts.local` para interromper a importação automática.
=======
By default, Slidev assumes all the fonts specified via `fonts` configurations come from Google Fonts. If you want to use local fonts, specify the `fonts.local` to opt-out the auto-importing.
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

```yaml
---
fonts:
  # assim como no font-family do css, você pode usar `,` para separar múltiplas como substitutas
  sans: 'Helvetica Neue,Robot'
<<<<<<< HEAD
  # marca 'Helvetica Neue' como uma fonte local
  local: 'Helvetica Neue'
=======
  # mark 'Helvetica Neue' as local font
  local: Helvetica Neue
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f
---
```

## Espessura & Itálico

Por padrão, o Slidev importa três espessuras `200`,`400`,`600` para cada fonte. Você pode configurá-las assim:

```yaml
---
fonts:
<<<<<<< HEAD
  sans: 'Robot'
  # padrão
=======
  sans: Robot
  # default
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f
  weights: '200,400,600'
  # importa fontes itálicas, o padrão é `false`
  italic: false
---
```

Está configuração se aplica a todas as fontes da web. Para um controle mais refinado da espessura de cada fonte, você vai precisar importá-las manualmente com [HTML](/custom/directory-structure.html#index-html) e CSS.

## Fontes Substitutas

Na maioria das vezes, você só vai precisar especificar a "fonte especial" e o Slidev vai incluir as fontes substitutas para você, por exemplo:

```yaml
---
fonts:
  sans: Robot
  serif: Robot Slab
  mono: Fira Code
---
```

<<<<<<< HEAD
vai resultar em
=======
will result in

<!-- eslint-skip -->
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

```css
.font-sans {
  font-family: "Robot",ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}
.font-serif {
  font-family: "Robot Slab",ui-serif,Georgia,Cambria,"Times New Roman",Times,serif;
}
.font-mono {
  font-family: "Fira Code",ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}
```

Se você quiser desabilitar as fontes substitutas, configure assim:

```yaml
---
fonts:
  mono: 'Fira Code, monospace'
  fallbacks: false
---
```

## Provedores

- Opções: `google` | `none`
- Padrão: `google`

Atualmente, apenas o Google Fonts é suportado, nós planejamos adicionar mais provedores futuramente. Especificar para `none` desabilitará a funcionalidade de importação automática por completo e fará com que todas as fontes sejam tratadas como fontes locais.

```yaml
---
fonts:
  provider: none
---
```
