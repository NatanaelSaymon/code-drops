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

**WINDOW E DOCUMENT**

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

**NODE**

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

**ID**

**getElementById** seleciona e retorna elementos do DOM

```js
// Seleciona pelo ID
const animaisSection = document.getElementById("animais");
const contatoSection = document.getElementById("contato");

// Retorna null caso não exista
const naoExiste = document.getElementById("teste");
```

**CLASSE E TAG**

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

**SELETOR GERAL E UNICO**

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

**SELETOR GERAL LISTA**

**querySelectorAll** retorna todos os elementos compatíveis com o seletor CSS em uma NodeList.

```js
const gridSection = document.querySelectorAll(".grid-section");
const listas = document.querySelectorAll("ul");
const titulos = document.querySelectorAll(".titulo");
const fotosAnimais = document.querySelectorAll(".animais-lista img");

// Retorna o segundo elemento
console.log(gridSection[1]);
```

**HTMLCOLLECTION VS NODELIST**

A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática.

```js
const titulo = document.querySelector(".titulo");
const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

titulo.classList.add("grid-section");

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens
```

**ARRAY-LIKE**

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

**FOREACH**

Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.

```js
const imgs = document.querySelectorAll("img");

imgs.forEach(function (item) {
  console.log(item);
});
```

**PARAMETROS DO FOREACH**

O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Esse função pode receber três parâmetros: valorAtual, index e array;

```JS
const imgs = document.querySelectorAll('img');

imgs.forEach(function(valorAtual, index, array){
  console.log(item); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});

```

**FOREACH E ARRAY**

forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.

```JS
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});

```

**ARROW FUNCTION**

Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.

```JS
const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
  console.log(item);
});

```

**ARGUMENTOS E PARENTESES**

```JS
const imgs = document.querySelectorAll('img');

// argumento único não precisa de parênteses
imgs.forEach(item => {
  console.log(item);
});

// multiplos argumentos precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});

// sem argumentos precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

```

**RETURN**

É possível omitir as chaves {} para uma função que retorna uma linha.

```JS
const imgs = document.querySelectorAll('img');

imgs.forEach(item =>
  console.log(item)
);

imgs.forEach(item => console.log(item));

```

_Não é permitido fechar a linha com ;_

**CLASSLIST**

Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

```JS
const menu = document.querySelector('.menu');

menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona/remove a classe
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo');
```

**ATTRIBUTE**

Retorna um array-like com os atributos do elemento

```js
const animais = document.querySelector(".animais");

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo
```

**GETATTRIBUTE E SETATTRIBUTE**

Métodos que retornam ou definem de acordo com o atributo selecionado

```js
const img = document.querySelector("img");

img.getAttribute("src"); // valor do src
img.setAttribute("alt", "Texto Alternativo"); // muda o alt
img.hasAttribute("id"); // true / false
img.removeAttribute("alt"); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo
```

## DIMENSÕES E DISTÂNCIA

**HEIGHT E WIDTH**

Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only.

```js
const section = document.querySelector(".animais");

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll
```

**OFFSETTOP E OFFSETLEFT**

```js
const section = document.querySelector(".animais");

// Distância entre o topo do elemento e o topo da página
section.offsetTop;

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
section.offsetLeft;
```

**GETBOUNDINGCLIENTRECT()**

Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.

```js
const section = document.querySelector(".animais");

const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll
```

**WINDOW**

```js
window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerWidth; // soma a barra de endereço

window.pageYOffset; // distância total do scroll horizontal
window.pageXOffset; // distância total do scroll vertical

if (window.innerWidth < 600) {
  console.log("Tela menor que 600px");
}
```

**MATCHMEDIA();**

Utilize um media-querie como no CSS para verificar a largura do browser

```js
const small = window.matchMedia("(max-width: 600px)");

if (small.matches) {
  console.log("Tela menor que 600px");
} else {
  console.log("Tela maior que 600px");
}
```

## ADDEVENTLISTENER

Adiciona uma função ao elemento, que é chamado de **Callback**, que será ativada assim que um certo evento ocorrer ensse elemento.

```js
const img = document.querySelector("img");

// elemento.addEventListener(event, callback, options)
img.addEventListener("click", function () {
  console.log("Clicou");
});
```

_Todo (addEventListener) dispara uma função._

**CALLBACK**

É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima

```JS
const img = document.querySelector('img');
function callback() {
  console.log('Clicou');
}

img.addEventListener('click', callback); // Correto 🚀

img.addEventListener('click', callback()); // Errado, resultado: undefined
```

**EVENT**

O primeiro parâmetro do callback é referente ao evento que ocorreu.

```js
const img = document.querySelector("img");

function callback(event) {
  console.log(event);
}

img.addEventListener("click", callback);
```

**PROPRIEDADES DO EVENT**

```js
const animaisLista = document.querySelector(".animais-lista");

function executarCallback(event) {
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener("click", executarCallback);
```

**EVENT.PREVENTDEFAULT()**

Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado.

```js
const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener("click", clickNoLink);
```

**THIS**

A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado.

```js
const img = document.querySelector("img");

function callback(event) {
  console.log(this); // retorna a imagem
  console.log(this.getAttribute("src"));
}

img.addEventListener("click", callback);
```

_Geralmente igual ao event.currentTarget_

**DIFERENTES EVENTOS**

Existem diversos eventos como **click**, **scroll**, **resize**, **keydown**, **keyup**, **mouseenter** e mais. Eventos podem ser adicionados a diferentes elementos, como o **window** e **document** também.

```js
const h1 = document.querySelector("h1");

function callback(event) {
  console.log(event.type, event);
}

h1.addEventListener("click", callback);
h1.addEventListener("mouseenter", callback);
window.addEventListener("scroll", callback);
window.addEventListener("resize", callback);
window.addEventListener("keydown", callback);
```

**KEYBORD**

Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard.

```JS
function handleKeyboard(event) {
  if(event.key === 'a')
    document.body.classList.toggle('azul');
  else if(event.key === 'v')
    document.body.classList.toggle('vermelho');
}

window.addEventListener('keydown', callback);

```

**FOREACH E EVENTOS**

O método addEventListener é adicionado à um único elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles.

```JS
const imgs = document.querySelectorAll('img');

function imgSrc(event) {
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc);
});

```

## TRANSVERSING E MANIPULAÇÃO

**OUTERHTML, INNERHTML E INNERTEXT**

Propriedades que retornam uma string contendo um HMTL ou um texto. É possivel atribuir um novo valor para as mesmas. Ex: **element.innerText = "novo texto"**

```js
const menu = document.querySelector(".menu");

menu.outerHTML; // todo o html do elemento
menu.innerHTML; // html interno
menu.innerText; // texto, sem tags

menu.innerText = "<p>Texto</p>"; // a tag vai como texto
menu.innerHTML = "<p>Texto</p>"; // a tag é renderizada
```

**TRANSVERSING**

Como navegar pelo DOM, utilizando suas propriedades e metodos.

```js
const lista = document.querySelector(".animais-lista");

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo
lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho
lista.querySelectorAll("li"); // todas as LI's
lista.querySelector("li:last-child"); // último filho
```
