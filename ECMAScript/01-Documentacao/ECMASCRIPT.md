<div class="center" style="text-align :center;">

# Dicas/ Lembrentes: Javascript

</div>

## VARIÁVEIS

Responsáveis por guardar dados na memória. Inicia com a palavra **var, let ou const**

```js
var nome = "Natan";
let idade = 28;
const possuiFaculdade = true;
```

## VÍRGULA

Utilizei a vírgula para criar mais de uma variável, sem repetir a palavra chave var.

```JS
var nome = 'André',
    idade = 28,
    possuiFaculdade = true;

```

## VARIÁVEIS SEM VALOR

Pode declarar ela e não atribuir valor inicialmente.

```js
var precoAplicativo;
// retorna undefined
```

## NOME

Os nomes podem iniciar com \$, \_, ou letras.

- Podem conter números mas não iniciar com eles

- Case sensitive

- nome é diferente de Nome

- Camel case

- É comum nomearmos assim: abrirModal

```JS
// Inválido
var §nome;
var function;
var 1possuiFaculdade;

// Válido
var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;
```

## MUDAR O VALOR ATRIBUÍDO

É possível mudar os valores atribuídos a variáveis declaradas com **var e let**. Porém não é possível modificar valores das declaradas com **const**

```js
var idade = 28;
idade = 29;

let preco = 50;
preco = 25;

const possuiFaculdade = true;
possuiFaculdade = false;
// Retorna um erro
```

---

## TIPOS DE DADOS

**7 TIPOS DE DADOS**

Todos são primitivos exceto os objetos.

```js
let nome = "Natan"; // String
let idade = 28; // Number
let possuiFaculdade = true; // Boolean
let time; // Undefined
let comida = null; // Null
let simbolo = Symbol(); // Symbol
let novoObjeto = {}; // Object
```

## VERIFICANDO O TIPO DE DADO

```js
var nome = "Natan";
console.log(typeof nome);
// retorna string
```

_typeof null retorna object_

---

## Operadores

```js
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4
```

_Lembrando que soma + em Strings serve para concatenar_

## OPERADORES ARITMÉTICOS (STRINGS)

```js
var soma = "100" + 50; // 10050
var subtracao = "100" - 50; // 50
var multiplicacao = "100" * "2"; // 200
var divisao = "Comprei 10" / 2; // NaN (Not a Number)
```

_É possível verificar se uma variável é NaN ou não com a função isNaN()_

## NAN = NOT A NUMBER

```js
var numero = 80;
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)
```

## A ORDEM IMPORTA

Começa por **multiplicação** e **divisão**, depois por **soma** e **subtração**.

```js
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = (20 / 2) * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40
```

_Parênteses para priorizar uma expressão_

## OPERADORES ARITMÉTICOS UNÁRIOS

```js
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6
```

## OPERADORES ARITMÉTICOS UNÁRIOS

O **+** e **-** tenta transformar o valor seguinte em número

```js
var frase = "Isso é um teste";
+frase; // NaN
-frase; // NaN

var idade = "28";
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1
```

**O - antes de um número torna ele negativo**

---

## BOOLEAN e CONDICIONAIS

**BOOLEAN**

Existem dois valores booleanos **false** ou **true**.

```js
var possuiGraduacao = true;
var possuiDoutorado = false;
```

**CONDICIONAIS IF E ELSE**

Verificar se uma expressão é verdadeira com if, caso contrário o else será ativado.

```js
var possuiGraduacao = true;

if (possuiGraduacao) {
  console.log("Possui graduação");
} else {
  console.log("Não possui graduação");
}
// retorna Possui Graduação e não executa o else
```

O valor dentro dos parênteses sempre será avaliado em false ou true.

**SWITCH**

Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.

```JS
var consoleFavorito = 'Xbox';

switch (corFavorita) {
  case 'Xbox':
    console.log('Vamos jogar Forza');
    break;
  case 'PS4':
    console.log('Vamos jogar Ovewatch');
    break;
  case 'Switch':
    console.log('Vamos jogar Pokemon');
    break;
  default:
    console.log('Fortnite');
}
```

**OPERADOR LÓGICO DE NEGAÇÃO !**

O operador !, nega uma operação booleana. Ou seja, !true é igual a false

```js
// Truthy
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'') // false
```

_Dica, você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy_

Vão sempre retornar um valor booleano

```js
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false
```

**OPERADORES DE COMPARAÇÃO**

O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===

```js
10 == "10"; // true
10 == 10; // true
10 === "10"; // false
10 === 10; // true
10 != 15; // true
10 != "10"; // false
10 !== "10"; // true
```

---

## FUNÇÕES

Bloco de código que pode sr executado e reutilziado. Valores podem ser passados por uma função e a mesma retorna outro valor.

```js
function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(4); // 16
areaQuadrado(5); // 25
areaQuadrado(2); // 4
```

**PARÂMETROS E ARGUMENTO**

Ao **criar** uma função, você pode definir **parâmetros**.

Ao **executar** uma função, você pode passar **argumentos**.

```js
// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

console.log(imc(80, 1.8)); // 80 e 1.80 são os argumentos
console.log(imc(60, 1.7)); // 60 e 1.70 são os argumentos
```

**PARENTESES EXECUTA A FUNÇÃO**

```js
function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return "Você gosta de mato";
  } else {
    return "Você não gosta de nada";
  }
}
corFavorita(); // retorna 'Você não gosta de nada'
```

_Se apenas definirmos a função com o function e não executarmos a mesma, nada que estiver dentro dela irá acontecer_

**ARGUMENTOS PODEM SER FUNÇÕES**

Chamadas de Callback, geralmente são funções que ocorrem após algum evento.

```js
addEventListener("click", function () {
  console.log("Clicou");
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima
```

Funções anônimas são aquelas em que o nome da função não é definido, escritas como **function() {}** ou **() => {}**

**ESCOPO**

Variáveis e funções definidas dentro de um bloco **{}**, não são visíveis fora dele.

```js
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}
console.log(totalPaises); // erro, totalPaises não definido
```

## OBEJTOS

Conjuntos de variaveis e funções, que são chamadas de propriedades e métodos. Declaração de Objetos **let pessoa = {}**

```js
var pessoa = {
  nome: "Natanael",
  idade: 28,
  profissao: "Desenvolvedor Web",
  possuiFaculdade: true,
};

pessoa.nome; // 'Natanael'
pessoa.possuiFaculdade; // true
```

_Propriedades e métodos consistem em nome (chave) e valor_

**MÉTODOS**

É uma propriedade que possui uma função no local do seu valor.

```js
var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20
```

Abreviação de area: function() {} para area() {}, no ES6+

```js
var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};
```

Todo Metodo retorna um objeto!

Ex: **getBoundingClientRect()**

_Esse metodo retorna varias propriedades, como: width, height, etc. Então se quisermos somente a altura do elemento basta pegar somente a propriedade que retorna a altura(height). Console.log(rect.height)_

```js
let nome = "Natan";
console.log(nome.toLowerCase());
console.log(nome.length);

/*
toLowerCase(): é um metodo.
length: é uma propriedade.
*/
```

**DOT NOTATION GET**

Acesse propriedades de um objeto utilizando o ponto **.**

```js
var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

var bg = menu.backgroundColor; // '#84E'
```

Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.

```js
var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

menu.backgroundColor = "#000";
console.log(menu.backgroundColor); // '#000'
```

**ADICIONAR PROPRIEDADES E MÉTODOS**

Basta adicionar um novo nome e definir o valor.

```js
var menu = {
  width: 800,
};

menu.height = 50;
menu.position = "fixed";
```

**PALAVRA-CHAVE THIS**

this irá fazer uma referência ao próprio objeto.

```js
var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  },
};

menu.metadeHeight(); // 25
// sem o this, seria 60
```

## OPERADORES DE ATRIBUIÇÃO

Podem funcionar como formas abreviadas

```js
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)
```

## ARRAY

É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em um unica variavel.

```js
var videoGames = ["Switch", "PS4", "XBox"];

videoGames[0]; // Switch
videoGames[2]; // Xbox
```

_Acesse um elemento do array utilizando o []_

**METODOS E PROPRIEDADE DE UM ARRAY**

```js
var videoGames = ["Switch", "PS4", "XBox"];

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push("3DS"); // Adiciona ao final da array
videoGames.length; // 3
```

_Existem diversos outros métodos, como map, reduce, forEach e mais que veremos mais à frente_

**FOR LOOP**

Fazem algo repetidamente até que uma condição seja atingida.

```js
for (let n = 0; n < 10; n++) {
  console.log(n);
}
// Retorna de 0 a 9 no console
```

_O for loop possui 3 partes, início, condição e incremento_

**ARRAYS E LOOP**

```js
var videoGames = ["Switch", "PS4", "XBox", "3DS"];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}
```

**BREAK**

O loop irá parar caso encontre o comando **Break**.

```js
var videoGames = ["Switch", "PS4", "XBox", "3DS"];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === "PS4") {
    break;
  }
}
```

**FOREACH**

ForEach é um metodo que executa uma função para cada item do Array. É uma forma mais simples de utilizarmos um loop com arrays
(ou array-like).

```js
var videoGames = ["Switch", "PS4", "XBox", "3DS"];
videoGames.forEach(function (item) {
  console.log(item);
});
// O argumento item será atribuído dinamicamente
```

_Podemos passar os seguintes parâmetros **item**, **index** e **array** ._

## Operador Ternario

Abreviação de condicionais com if e else

```js
var idade = 19;
var podeBeber = idade >= 18 ? "Pode beber" : "Não pode beber";
console.log(podeBeber); // Pode beber

// condição ? true : false
```

_Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição_

## ESCOPO

**ESCOPO DE FUNÇÃO**

Variáveis declaradas dentro de funções não são acessadas fora das mesmas.

```js
function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined
```

_Escopo evita o conflito entre nomes._

**VARIÁVEL GLOBAL (ERRO)**

Declarar variáveis sem a palavra chave **var**, **const** ou **let**, cria uma variável que pode ser acessar em qualquer escopo (global). Isso é um erro.

```js
function mostrarCarro() {
  carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca
console.log(carro); // Fusca
```

**ESCOPO DE FUNÇÃO (PAI)**

Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.

```js
var carro = "Fusca";

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro); // Fusca
```

**ESCOPO DE BLOCO**

Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declarmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.

```js
if (true) {
  var carro = "Fusca";
  console.log(carro);
}
console.log(carro); // Carro
```

**VAR VAZA O BLOCO**

Mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined.

```js
if (false) {
  var carro = "Fusca";
  console.log(carro);
}
console.log(carro); // undefined
```

**CONST E LET NO LUGAR DE VAR**

A partir de agora utilize apenas **const** e **let** para declarmos variáveis.

```js
if (true) {
  const carro = "Fusca";
  console.log(carro);
}
console.log(carro); // erro, carro is not defined
```

**{} CRIA UM BLOCO**

Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}

```js
{
  var carro = "Fusca";
  const ano = 2018;
}
console.log(carro); // Carro
console.log(ano); // erro ano is not defined
```

**FOR LOOP**

Ao utilizar var dentro de um forloop, que é um bloco, o valor do variável utilizada irá vazar e existir fora do loop.

```js
for (var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // 10
```

**FOR LOOP COM LET**

Com o **let** evitamos que o número vaze.

```js
Com o let evitamos que o número vaze.
```

**CONST**

Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.

```js
const mes = 'Dezembro';
mes = 'Janeiro'; // erro, tentou modificar o valor
const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29; // Funciona
data = 'Janeiro'; // erro

```

_Variáveis com valores constantes devem utilizar o const._

**LET**

Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.

```js
let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

let ano = 2020; // erro, redeclarou a variável
```
