# Fontes

> Disponível a partir da v0.20

Enquanto você pode usar HTML e CSS para customizar as fontes e estilos nos seus slides como preferir, Slidev também provê um jeito conveniente de usá-los sem esforços.

No seu fontmatter, configure assim:

```yaml
---
fonts:
  # basicamente o texto
  sans: 'Robot'
  # use com a classe `font-serif` do windicss 
  serif: 'Robot Slab'
  # para blocos de código, códigos inline, etc.
  mono: 'Fira Code'
---
```

E é só isso.

As fontes serão **importadas automaticamente do [Google Fonts](https://fonts.google.com/)**. Isso significa que você está livre para usar qualquer fonte disponível no Google Fonts diretamente.

## Fontes Locais

Por padrão, Slidev assume que todas as fontes especificadas por meio da configuração `fonts` vêm do Google Fonts. Se você quiser usar fontes locais, especifique o `fonts.local` para interromper a importação automática.

```yaml
---
fonts:
  # assim como no font-family do css, você pode usar `,` para separar múltiplas como substitutas
  sans: 'Helvetica Neue,Robot'
  # marca 'Helvetica Neue' como uma fonte local
  local: 'Helvetica Neue'
---
```

## Espessura & Itálico

Por padrão, Slidev importa três espessuras `200`,`400`,`600` para cada fonte. Você pode configurá-las assim:

```yaml
---
fonts:
  sans: 'Robot'
  # padrão
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
  sans: 'Robot'
  serif: 'Robot Slab'
  mono: 'Fira Code'
---
```

vai resultar em

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
  fallback: false
---
```

## Provedores

- Opções: `google` | `none`
- Padrão: `google`

Atualmente, apenas o Google Fonts é suportado, nós planejamos adicionar mais provedores futuramente. Especificar para `none` desabilitará a funcionalidade de importação automática por completo e fará com que todas as fontes sejam tratadas como fontes locais.

```yaml
---
fonts:
  provide: 'none'
---
```


