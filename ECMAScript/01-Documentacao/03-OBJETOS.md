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

# OBEJTOS - STRING

É a construtora de strings, toda string possui as propriedades e métodos do prototype de String.

```js
const comida = "Pizza";
const liquido = new String("Água");
const ano = new String(2018);
```

## string.LENGTH

Propriedade com o total de caracteres da string.

```js
const comida = "Pizza";
const frase = "A melhor comida";

comida.length; // 5
frase.length; // 15

comida[0]; // P
frase[0]; // A
frase[frase.length - 1]; // a
```

## string.CHARAT(N)

Retorna o caracter de acordo com o index de (n).

```js
const linguagem = "JavaScript";

linguagem.charAt(0); // J
linguagem.charAt(2); // v
linguagem.charAt(linguagem.length - 1); // t
```

## string.CONCAT(string2, string3, ...)

Concatena as strings e retorna o resultado.

```js
const frase = "A melhor linguagem é ";
const linguagem = "JavaScript";

const fraseCompleta = frase.concat(linguagem, "!!");
```

## string.INCLUDES(SEARCH, POSITION)

Procura pela string exata dentro de outra string. A procura é case sensitive.

```js
const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false
```

## string.ENDSWITH(SEARCH) E string.STARTSWITH(SEARCH)

Procura pela string exata dentro de outra string. A procura é case sensitive.

```js
const fruta = "Banana";

fruta.endsWith("nana"); // true
fruta.startsWith("Ba"); // true
fruta.startsWith("na"); // false
```

## string.SLICE(START, END)

Corta a string de acordo com os valores de start e end.

```js
const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi
```

## string.SUBstringING(START, END)

Corta a string de acordo com os valores de start e end. Não funcionar com valores negativos como o slice.

```js
const linguagem = "JavaScript";
linguagem.substring(3, 5); // aS
linguagem.substring(0, 4); // Java
linguagem.substring(4); // Script
linguagem.substring(-3); // JavaScript
```

## string.INDEXOF(SEARCH) E string.LASTINDEXOF(SEARCH)

Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.

```js
const instrumento = "Guitarra";

instrumento.indexOf("r"); // 5
instrumento.lastIndexOf("r"); // 6
instrumento.indexOf("ta"); // 3
```

## string.PADSTART(N, string) E string.PADEND(N, string)

Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.

```js
const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, "."));
});

listaPrecos[0].padStart(10, "."); // .....R$ 99
listaPrecos[0].padEnd(10, "."); // R$ 99.....
```

## string.REPEAT(N)

Repete a string (n) vezes.

```js
const frase = "Ta";

frase.repeat(5); // TaTaTaTaTa
```

## string.REPLACE(REGEXP|SUBstring, NEWstring|FUNCTION)

Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.

```js
let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
listaItens = listaItens.replace(/[ ]+/g, ", ");

let preco = "R$ 1200,43";
preco = preco.replace(",", "."); // 'R$ 1200.43'
```

## string.SPLIT(PADRAO)

Divide a string de acordo com o padrão passado e retorna uma array.

```js
const listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
const arrayItens = listaItens.split(" ");

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
const htmlNovo = htmlArray.join("section");
```

## string.TOLOWERCASE() E string.TOUPPERCASE()

Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.

```js
const sexo1 = "Feminino";
const sexo2 = "feminino";
const sexo3 = "FEMININO";

sexo1.toLowerCase() === "feminino"; // true
sexo2.toLowerCase() === "feminino"; // true
sexo3.toLowerCase() === "feminino"; // true
```

## string.TRIM(), string.TRIMSTART(), string.TRIMEND()

Remove espaço em branco do início ou final de uma string.

```js
const valor = "  R$ 23.00   ";
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'
```

# OBJETOS - NUMBER E MATH

## NUMBER

É a construtora de números, todo número possui as propriedades e métodos do prototype de Number. Number também possui alguns métodos.

```js
const ano = 2018;
const preco = new Number(99);
```

## NUMBER.ISNAN() E NUMBER.ISINTEGER();

isNaN() é um método de Number, ou seja, não faz parte to protótipo. isInteger() verifica se é uma integral.

```js
Number.isNaN(NaN); // true
Number.isNaN(4 + 5); // false

Number.isInteger(20); // true
Number.isInteger(23.6); // false
```

## NUMBER.PARSEFLOAT() E NUMBER.PARSEINT()

parseFloat() serve para retornarmos um número a partir de uma string. A String deve começar com um número. parseInt recebe também um segundo parâmetro que é o Radix, 10 é para decimal.

```js
parseFloat("99.50"); // Mesma função sem o Number
Number.parseFloat("99.50"); // 99.5
Number.parseFloat("100 Reais"); // 100
Number.parseFloat("R$ 100"); // NaN

parseInt("99.50", 10); // 99
parseInt(5.43434355555, 10); // 5
Number.parseInt("100 Reais", 10); // 100
```

## N.TOFIXED(DECIMAIS)

Arredonda o número com base no total de casas decimais do argumento.

```js
const preco = 2.99;
preco.toFixed(); // 3

const carro = 1000.455;
carro.toFixed(2); // 1000.46

const preco2 = 1499.49;
preco2.toFixed(); // 1499
```

## N.TOLOCALESTRING(LANG, OPTIONS);

Formata o número de acordo com a língua e opções passadas.

```js
const preco = 59.49;
preco.toLocaleString("en-US", { style: "currency", currency: "USD" }); // $59.49
preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }); // R$ 59,49
```

## MATH

É um Objeto nativo que possui propriedades e métodos de expressões matemáticas comuns.

```js
Math.PI; // 3.14159
Math.E; // 2.718
Math.LN10; // 2.303
```

## MATH.ABS(), MATH.CEIL(), MATH.FLOOR() E MATH.ROUND()

abs() retorna o valor absoluto, ou seja, transforma negativo em positivo. ceil() arredonda para cima, retornando sempre uma integral e floor para baixo. round() arredonda para o número integral mais próximo.

```js
Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4
```

## MATH.MAX(), MATH.MIN() E MATH.RANDOM();

max() retorna o maior número de uma lista de argumentos, min() o menor número e random() um número aleatório entre 0 e 1.

```js
Math.max(5, 3, 10, 42, 2); // 42
Math.min(5, 3, 10, 42, 2); // 2

Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500); // entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32;
Math.floor(Math.random() * (max - min + 1)) + min;
```
