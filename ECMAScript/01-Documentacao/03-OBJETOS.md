# OBJETOS - CONSTRUCTORS FUNCTIONS

## OBJETOS

Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}. Mas e se precisarmos criar um novo objeto, com as mesmas características do anterior? É possível com o Object.create, mas veremos ele mais tarde.

```js
const carro = {
  marca: "Marca",
  preco: 0,
};

const honda = carro;
honda.marca = "Honda";
honda.preco = 4000;

const fiat = carro;
fiat.marca = "Fiat";
fiat.preco = 3000;
```

_carro, fiat e honda apontam para o mesmo objeto._

## CONSTRUCTOR FUNCTIONS

Para isso existem as Constructor Functions, ou seja, Funções Construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma.

```js
function Carro() {
  this.marca = "Marca";
  this.preco = 0;
}

const honda = new Carro();
honda.marca = "Honda";
honda.preco = 4000;
const fiat = new Carro();
fiat.marca = "Fiat";
fiat.preco = 3000;
```

_Usar Pascal Case, ou seja, começar com letra maiúscula._

## NEW KEYWORD

A palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela.

```js
const honda = new Carro();

// 1 Cria um novo objeto
honda = {};

// 2 Define o protótipo
honda.prototype = Carro.prototype;

// 3 Aponta a variável this para o objeto
this = honda;

// 4 Executa a função, substituindo this pelo objeto
honda.marca = "Marca";
honda.preco = 0;

// 5 Retorna o novo objeto
return (honda = {
  marca: "Marca",
  preco: 0,
});
```

## PARÂMETROS E ARGUMENTOS

Podemos passar argumentos que serão utilizados no momento da criação do objeto.

```js
function Carro(marca, preco) {
  this.marca = marca;
  this.preco = preco;
}

const honda = new Carro("Honda", 4000);
const fiat = new Carro("Fiat", 3000);
```

## THIS KEYWORD

O **this** faz referência ao próprio objeto construído com a Constructor Function.

```js
function Carro(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}

const honda = new Carro("Honda", 2000);
```

_Variáveis dentro da Constructor estão "protegidas"._

## EXEMPLO REAL

Quando mudamos a propriedade seletor, o objeto Dom irá passar a selecionar o novo seletor em seus métodos.

```js
const Dom = {
  seletor: "li",
  element() {
    return document.querySelector(this.seletor);
  },
  ativo() {
    this.element().classList.add("ativo");
  },
};

Dom.ativo(); // adiciona ativo ao li
Dom.seletor = "ul";
Dom.ativo(); // adiciona ativo ao ul
```

## CONSTRUCTOR FUNCTION REAL

Um objeto criado com uma Constructor, não irá influenciar em outro objeto criado com a mesma Constructor.

```js
function Dom() {
  this.seletor = "li";
  const element = document.querySelector(this.seletor);
  this.ativo = function () {
    element.classList.add("ativo");
  };
}

const lista = new Dom();
lista.seletor = "ul";
lista.ativo();

const lastLi = new Dom();
lastLi.seletor = "li:last-child";
lastLi.ativo();
```

## LEMBRE-SE DE USAR PARÂMETROS

```js
function Dom(seletor) {
  const element = document.querySelector(seletor);
  this.ativo = function (classe) {
    element.classList.add(classe);
  };
}

const lista = new Dom("ul");
lista.ativo("ativo");

const lastLi = new Dom("li:last-child");
lastLi.ativo("ativo");
```

---

## OBEJTOS - STRING
