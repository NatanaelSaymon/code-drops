# Dicas CSS

## RESET CSS / DECLARAÇÃO DE VARIAVEL

```CSS

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: ""
  }

  ul, nav{
    list-style: none;
  }

  a{
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }

  #VARIAVEIS

  :root{
    --color-principal: #ff5E84 (para chamar: var(--color-principal);
  }
```

---

## Grid: grid-template-columns

Dessa forma cada card terá o tamanho de 310px fixos

```css
.cards {
  display: grid;
  grid-template-columns: 310px 310px 310px;
}
```

Dessa forma os cards ficaram daptaveis de uma maneira mais inteligente. Onde o tamnho minimo é: 250px e o tamanho maximo é de 1fr. Assim não é necessario o uso de media querys.

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

---

## Responsivo

Dessa forma todos os elementos dentro do container ocuparam somente 90% da largura total, então vai sobrar 10%. Isso vai fazer com que o conteudo não ocupe o tamanho total da largura disponivel.

```css
container {
  width: 90%;
  max-width: 1200px;
}
```

---

## Dica de centralização no Body

O codigo abaixo centraliza tudo ao eixo Y no body.

```css
body {
  display: grid;
  place-items: center;
}
```

---

## Line-height

Sempre é o dobro do tamanho do font-size.

```css
h1 {
  font-size: 16px;
  line-height: 32px;
}
```

---

## HTML / CSS: Textos Fluidos

root: 16px

rem -> multiplacado pelo root

**Estrategia**

A cada 1rem será considerado 10px

```css
html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
}
```

---

## HTML - Scroll

```css
html {
  scroll-behavior: smooth;
}
```
