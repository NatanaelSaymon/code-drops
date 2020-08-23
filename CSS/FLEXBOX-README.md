# FLEXBOX

O flexbox foi criado para facilitar o posicionamento de componentes, principalmente quando você não sabe a largura e a altura do mesmo.

Tudo começa com o **display: flex;** no elemento pai. A interação é baseada na relação entre o elemento **pais** e os **filhos**.

Sendo o _pai um container_ e os _filhos items do container_.

## CONTAINER

O display flex no container, fará com que os filhos diretos se comportem como elementos flex

```css
.container {
  display: flex;
}
```

**Define a direção dos itens filho**

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

**Define se a linha quebra ou não**

```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

**Define a distribuição horizontal do conteúdo**

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

**Define o alinhamento dos itens**

```css
.container {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

**Define a distribuição vertical do conteúdo**

```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around |
    stretch;
}
```

## ITEMS

**Define a ordem do item**

```css
.item {
  order: 1;
}
```

**Define a proporção do item**

```css
.item {
  flex-grow: 1; /*0 é o padrão*/
}
```

**Define a capacidade de encolher do item**

```css
.item {
  flex-shrink: 1; /*1 é o padrão*/
}
```

**Define um valor base para o item**

```css
.item {
  flex-basis: 200px | auto; /*default auto*/
}
```

**Atalhos para os itens acima**

```css
.item {
  flex: none | [ < "flex-grow" > < "flex-shrink" >? || < "flex-basis" > ];
}
```

**Define o alinhamento do item**

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```
