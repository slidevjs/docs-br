# Desenhos & Anotações

> Disponível a partir da v0.23

<<<<<<< HEAD
Nós temos o [drauu](https://github.com/antfu/drauu) embutido para desenhos e anotações que podem melhorar ainda mais suas apresentações.

Pra começar, clique no ícone <carbon-pen class="inline-icon-btn"/> na barra de navegação e comece a desenhar. Isto também está disponível no [Modo Apresentador](/guide/presenter-mode). Desenhos e anotações que você ciar serão **sincronizadas** automaticamente por todas as instâncias em tempo real.
=======
[drauu](https://github.com/antfu/drauu) is built-in for drawing and annotation, should that help improve your presentation further.

To start, click the <carbon-pen class="inline-icon-btn"/> icon in the toolbar and start drawing. It's also available in the [Presenter Mode](/guide/presenter-mode). Drawings and annotations you created will be **synced** automatically across all instances in real time.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

<TheTweet id="1424027510342250499" />

## Use com uma caneta Stylus

<<<<<<< HEAD
Quando usado com uma caneta stylus em um tablet (por exemplo, iPad com a Apple Pencil), o Slidev pode detectar com inteligência o tipo de entrada. Você pode desenhar diretamente nos seus slides com uma caneta sem precisar alternar para o modo de desenho, e tendo o controle de navegação com seus dedos ou mouse.
=======
When using a stylus pen on a tablet (for example, iPad with Apple Pencil), Slidev will intelligently detect the input type. You can directly draw on your slides with the pen without turning on the drawing mode, while having your fingers or mouse control the navigation.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

## Manter Desenhos

A seguinte configuração do frontmatter te permite manter os desenhos como SVGs dentro do diretório `.slidev/drawings` e tê-los no seu PDF exportado site hospedado.

```md
---
drawings:
  persist: true
---
```

## Desabilitar Desenhos

Inteiramente:

```md
---
drawings:
  enabled: false
---
```

Apenas no Desenvolvimento:

```md
---
drawings:
  enabled: dev
---
```

Apenas no Modo de Apresentador:

```md
---
drawings:
  presenterOnly: true
---
```

## Sincronização dos Desenhos

<<<<<<< HEAD
Por  padrão, o Slidev sincroniza os seus desenhos por todas as instâncias. Se você estiver compartilhando seus slides com outras pessoas, você pode querer desabilitar a sincronização assim:
=======
By default, Slidev syncs up your drawings across all instances. If you are sharing your slides with others, you might want to disable the syncing via:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```md
---
drawings:
  syncAll: false
---
```

<<<<<<< HEAD
Com esta configuração, só os desenhos da instância do apresentador serão sincronizados com as outras.
=======
With this config, only the drawing from the presenter instance will be able to sync with others.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3
