<p align="center">

# JAVASCRIPT - DOM

</p>

## DOCUMENT OBJECT MODEL (DOM)

É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

```js
console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser
```

_Ao inspecionar elemento com o Chrome, você está vendo a representação oficial do DOM._

<p align="center">

<img src="https://www.origamid.com/slide/javascript-completo-es6/aulas/03-dom-para-iniciantes/0301-o-que-e-o-dom/dom.svg" width="60%">

</p>

## WINDOW E DOCUMENT

São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

**Bom**: window | **Dom**: document

- Para acessar itens do Browser: **window.addEventListener( )**
- Para acessar itens do Documento: **document.addEventListener( )**

```js
window.alert("Isso é um alerta");
alert("Isso é um alerta"); // Funciona

document.querySelector("h1"); // Seleciona o primeiro h1
document.body; // Retorna o body
```

_window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades._

## NODE

Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

```js
const titulo = document.querySelector("h1");

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

titulo.addEventListener("click", callback);
// ativa a função callback ao click no titulo
```

## ID

**getElementById** seleciona e retorna elementos do DOM

```js
// Seleciona pelo ID
const animaisSection = document.getElementById("animais");
const contatoSection = document.getElementById("contato");

// Retorna null caso não exista
const naoExiste = document.getElementById("teste");
```

## CLASSE E TAG

**getElementsByClassName** e **getElementsByTagName** selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

```js
// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName("grid-section");
const contato = document.getElementsByClassName("grid-section contato");

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName("ul");

// Retorna o primeiro elemento
console.log(gridSection[0]);
```

## SELETOR GERAL E UNICO

**querySelector** retorna o primeiro elemento que combinar com o seu seletor CSS.

```js
const animais = document.querySelector(".animais");
const contato = document.querySelector("#contato");
const ultimoItem = document.querySelector(".animais-lista li:last-child");
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector("ul");

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector("li");
```

## SELETOR GERAL LISTA

**querySelectorAll** retorna todos os elementos compatíveis com o seletor CSS em uma NodeList.

```js
const gridSection = document.querySelectorAll(".grid-section");
const listas = document.querySelectorAll("ul");
const titulos = document.querySelectorAll(".titulo");
const fotosAnimais = document.querySelectorAll(".animais-lista img");

// Retorna o segundo elemento
console.log(gridSection[1]);
```

## HTMLCOLLECTION VS NODELIST

A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática.

```js
const titulo = document.querySelector(".titulo");
const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

titulo.classList.add("grid-section");

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens
```

## ARRAY-LIKE

HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList.

```JS
const gridSection = document.querySelectorAll('.grid-section');

gridSection.forEach(function(gridItem, index, array) {
  gridItem.classList.add('azul');
  console.log(index) // index do item na array
  console.log(array) // a array completa
});

```

_É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection)_

## FOREACH E ARROWFUNCTION

## Javascript - addEventListener

Adiciona uma função ao elemento, que é chamado de **Callback**, que será ativada assim que um certo evento ocorrer ensse elemento.

```js
const img = document.querySelector("img");

// elemento.addEventListener(event, callback, options)
img.addEventListener("click", function () {
  console.log("Clicou");
});
```

Todo (addEventListener) dispara uma função.

## Javascript - Parâmentros e Argumentos

- Ao criar uma função, você pdoe definir parâmetros.
- Ao executar um função, você pode passar argumentos.

## ForEach

Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.

```js
const videoGame = ["Xbox X", "PS4", "Switch"];
videoGame.forEach(function (item) {
  console.log(item);
});
```

_Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição_

## Adicionando um evento no carregamento do pagina:

```html
<div id="dv1"></div>
```

```js
function msg() {
  alert("Olá");
}

function addEvento() {
  document.querySelector("#dv1").addEventListener("click", msg);
}

window.addEventListener("load", addEvento);
```

Explicação: quando a janela do browser carregar **load**, a função **addEvento** irá carregar, e quando o usuario clicar na div, vai ser disparada a função!

## Passando uma função com parametros

```html
<div id="dv1"></div>
```

```js
function msg() {
  alert("Olá");
}

function bgColor(div, color) {
  div.style.backgroundColor = color;
}

function addEvento() {
  div = document.querySelector("#dv1");
  div.addEventListener("click", msg);

  div.addEventListener("mouseover", function (event) {
    color(div, "#fff");
  });

  div.addEventListener("mouseout", function (event) {
    color(div, "#ccc");
  });
}

window.addEventLisneter("load", addEvento);
```
