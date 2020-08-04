<div class="center" style="text-align :center;">

# Dicas/Lembretes: DOM - Javascript

</div>

<div style="text-align: center">

<img src="https://www.origamid.com/slide/javascript-completo-es6/aulas/03-dom-para-iniciantes/0301-o-que-e-o-dom/dom.svg" width="300px">

</div>
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

## Javascript - Bom e Dom

Bom: window

Dom: document

- Para acessar itens do Browser: window.addEventListener( )
- Para acessar itens do Documento: document.addEventListener( )

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
