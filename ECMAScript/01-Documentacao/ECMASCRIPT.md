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

## Tipos de dados

**7 Tipos de dados**

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

**typeof null retorna object**

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

**Lembrando que soma + em Strings serve para concatenar**

## OPERADORES ARITMÉTICOS (STRINGS)

```js
var soma = "100" + 50; // 10050
var subtracao = "100" - 50; // 50
var multiplicacao = "100" * "2"; // 200
var divisao = "Comprei 10" / 2; // NaN (Not a Number)
```

**É possível verificar se uma variável é NaN ou não com a função isNaN()**

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

**Parênteses para priorizar uma expressão**

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

## Boolean e Condicionais

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

**Dica, você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy**

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

**Operador Ternario**

Abreviação de condicionais com if e else

```js
var idade = 19;
var podeBeber = idade >= 18 ? "Pode beber" : "Não pode beber";
console.log(podeBeber); // Pode beber

// condição ? true : false
```

_Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição_
