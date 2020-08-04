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
