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
