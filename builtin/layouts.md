# Layouts

## Layouts Internos

> Já que temas podem sobrepor o comportamento dos layouts, o melhor jeito de saber exatamente o uso, parâmetros e exemplos é consultando suas respectivas documentações.


### `center`

Exibe o conteúdo no meio da tela.

### `cover`

Usado para exibir a página de capa para a apresentação, pode conter o título, contextualização, etc.

### `default`

O layout mais básico, para exibir qualquer conteúdo.

### `end`

A página final da apresentação.

### `fact`

Para mostrar algum fato ou dado com bastante destaque na tela.

### `full`

Usa todo o espaço da tela para exibir o conteúdo.

### `image-left`

Mostra uma imagem no lado esquerdo da tela, o conteúdo será posicionado à direita.

#### Uso

```yaml
---
layout: image-left

# a fonte da imagem
image: ./caminho/para/a/imagem

# uma nome de classe customizado para o conteúdo
class: my-cool-content-on-the-right
---
```

### `image-right`

Mostra uma imagem no lado direito da tela, o conteúdo será posicionado à esquerda.

#### Uso

```yaml
---
layout: image-right

# a fonte da imagem
image: ./caminho/para/a/imagem

# uma nome de classe customizado para o conteúdo
class: my-cool-content-on-the-left
---
```

### `image`

Mostra uma imagem como o conteúdo principal da página.

#### Uso

```yaml
---
layout: image

# a fonte da imagem
image: ./caminho/para/a/imagem
---
```


### `iframe-left`

Shows a web page on the left side of the screen, the content will be placed on the right side.

#### Usage

```yaml
---
layout: iframe-left

# the web page source
url: https://github.com/slidevjs/slidev

# a custom class name to the content
class: my-cool-content-on-the-right
---
```

### `iframe-right`

Shows a web page on the right side of the screen, the content will be placed on the left side.

#### Usage

```yaml
---
layout: iframe-right

# the web page source
url: https://github.com/slidevjs/slidev

# a custom class name to the content
class: my-cool-content-on-the-left
---
```

### `iframe`

Shows a web page as the main content of the page.

#### Usage

```yaml
---
layout: iframe

# the web page source
url: https://github.com/slidevjs/slidev
---
```


### `intro`

Para introduzir a apresentação, geralmente com o título, uma descrição curta, o autor, etc.

### `none`

Um layout sem nenhum estilo existente.

### `quote`

Para exibir uma citação com destaque.

### `section`

Usado para marcar o início de uma nova seção da apresentação.

### `statement`

Fazer uma afirmação/declaração como o principal conteúdo da página.

### `two-cols`

Separa o conteúdo da página em duas colunas.

#### Uso


```md
---
layout: two-cols
---

# Esquerda

Isto está à esquerda

::right::

# Direita

Isto está à direita
```

## Layouts Customizados

Crie um diretório `layouts/` no diretório raiz do projeto, e simplesmente insira os componentes do seu layout customizado do Vue lá dentro.

Leia mais na seção [Customização](/custom/directory-structure#layouts).

## Layouts providos por temas

Temas podem fornecer layouts ou até mesmo sobrepor layouts existentes. É recomendado ler a documentação do tema para ver o que eles provém.
