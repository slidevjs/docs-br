# Desenhos & Anotações

> Disponível a partir da v0.23

Nós temos o [drauu](https://github.com/antfu/drauu) embutido para desenhos e anotações que podem melhorar ainda mais suas apresentações.

Pra começar, clique no ícone <carbon-pen class="inline-icon-btn"/> na barra de navegação e comece a desenhar. Isto também está disponível no [Modo Apresentador](/guide/presenter-mode). Desenhos e anotações que você ciar serão **sincronizadas** automaticamente por todas as instâncias em tempo real.

<TheTweet id="1424027510342250499" />

## Use com uma caneta Stylus

Quando usado com uma caneta stylus em um tablet (por exemplo, iPad com a Apple Pencil), o Slidev pode detectar com inteligência o tipo de entrada. Você pode desenhar diretamente nos seus slides com uma caneta sem precisar alternar para o modo de desenho, e tendo o controle de navegação com seus dedos ou mouse.

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

Por  padrão, o Slidev sincroniza os seus desenhos por todas as instâncias. Se você estiver compartilhando seus slides com outras pessoas, você pode querer desabilitar a sincronização assim:

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
>>>>>>> ee683ae81a2021c44b278d720a418ee0c6ddb537
