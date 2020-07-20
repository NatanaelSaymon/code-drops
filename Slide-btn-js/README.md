## Dicas / Explicações: Slide com botões

# Variaveis que serão usadas no sistema
- **let imgs** = [] <- armazena todas as imagens
- **let slide** <- variavel que vai receber o id da div/section
- **let imgAtual** <- contem a imagem atual
- **let maxImage** <- contem o tamanho maximo de todas as imagens
- **let tempoTroca** = 3000 <- setInterval



# Quando estamos trabalhando com slides, é semrpe bom fazer um pré-carregamento das imagens.

````js
let imgs = []

function preCarregamento(){
  let img = 1
  for(let i = 0; i < 3; i++){
    imgs[i] = new Image()
    imgs[i].src="image/img"+img+".jpg"
    img++
  }
}
````

# Array para armazenar as imagens
- Estamos criando um vetor para armazenar nossas imagens

# Explicação: function preCarregamento() 
- A função que vai pre-carregar nossas imagens.
- A criação do **for** é para percorrer todas as imagens que temos. 
- 3 é a quantidade total de imagem que temos.
- Dentro do **fro** precisamos passar a url da imagem. Nesse caso, todas as imagens estão dentro da pasta **image** e todas as imagens já um nome pré fixado **img** então nesse caso, iremos concatenar. E todas são **jpg** Assim vai facilitar o nosso trabalho.
- Agora vamos criar uma variavel fora do **for**, que vai receber o numero de cada imagem **let img = 1**.
- Agora basta inserir a variavel no caminho da imagem: **src="image/img"+img+".jpg"**
- E para finalizar, toda vez que o **for** inicializar, a variavel img vai receber + 1 imagem

# Função que cerrega a imagem na div/section

````js
function carregaImg(img){
  slider.style.backgroundImage = "url('"+imgs[img].src+"')"
  slider.style.backgroundPosition = "center"
  slider.style.backgroundRepeat = "no-repeat"
  slider.style.backgroundSize = "cover"
}
````

- Primeiro precisamos criar uma variavel que vai receber o id da div/section: **let slider**
- Agora que tesmo essa variavel, precisamos passar a url com o caminho da imagem que está sendo passada por parametro
- Estamos passando por parametro (img) qual imagem queremos carregar
- Agora estamos aplicando no background da div/section a imagem
- O restante dos estilos, é para centrelizar a imagem



# Função de trocar imagem

````js
  function troca(){
    imgAtual++
    if(imgAtual > maxImage){
      imgAtual = 0
    }
    carregaImg(imgAtual)
  }
````
- Toda vez que essa função for chamada a **let imgAtual** vai ser incrementada, ou seja, irá carregar uma nova imagem
- A estrutura **if** serve para que, quando a imgAtual for maior que o tamanho maximo do imagem, a imgAtual vai receber 0
- Agora basta chamar a função **carregaImg(imgAtual)** com a imagem atual.


# Criando a função: Iniciar() 

````js
  function inicia(){
    preCarregamento()
    imgAtual = 0
    maxImage = imgs.length - 1
    slider = document.querySelector("#banner")
    carregaImg(imgAtual)
    setInterval(troca, tempoTroca)
  }
````

Dentro dessa função, precisamos passar o

- **preCarregamento()** : pois esta função, vai pre-carregar nessa imagens
- **imgAtual** : inicia com 0
- **maxImage** : guarda o numero maximo de imagens
- **slider** : exibi a imagem na div/section
- **carregaImg(imgAtual)** : carrega a imagem atual
- **setInterval(troca, tempoTroca)** : tempo de troca


# Agora que todo o nosso codigo está pronto, vamos chamar a função inicia() quando a pagina estiver carregada

````js
  window.addEventListener("load", inicia)
````

## Agora vamos criar a logica dos botões

Vamos criar mias uma variavel:

````js
let vtempo
````

As unicas funções que sofreram alterações será: **function inciar() e function troca()**

Ex:

````js
function inicia(){
  preCarregamento()
  imgAtual = 0
  maxImage = imgs.length - 1
  slider = document.querySelector("#banner")
  carregaImg(imgAtual)
  tempoTroca = 0
}
````

A variavel **tempoTroca não mais referente ao setInterval()**. Essa variavel tempoTroca servirá como um contador para o tempo.


Agora iremos criar uma nova função, chamada: **anima()**. Esse função vai controlar todo o tempo do nosso processo.

````js
function anima(){

}
````

Agora vamos melhorar a nossa função troca, pois será utilizada pelos os **botões**. Pois essa função ela tem que saber que, quando clicar-mos a direita, avança um slide. E quando clicar na esquerda, recuar um slide.

**Iremos para como paremetro a (direcao). Ex: quando passarmos -1 a troca terá que ser feito para esquerda e quando passarmos 1 a troca terá que ser feita para direita.**

````js
function troca(direcao){
  tempoTroca = 0 // Toda vez que for feita um troca de slide, o tempo será zerado.
  imgAtual+= direcao
  if(imgAtual > maxImage){ //Aqui sabemos que o img está recebendo o tamanho do array de img
    imgAtual = 0
  }
  else if(imgAtual < 0){ //Aqui, quando chegar ao fim, a imgAtual vai receber o tamanho novamente o array de img
    imgAtual = maxImage
  }
  carregaImg(imgAtual)
}
````

Agora precisamos chamar o evento de troca nos botões: 
````html
<button class="btn-arrow" onclick="troca(-1)"> < </button>
<button class="btn-arrow" onclick="troca(1)"> > </button>
````