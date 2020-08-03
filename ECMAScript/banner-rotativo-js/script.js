let time = 3000 /*tempo de rotação*/
let currentImagemIndex = 0 /*imagem atual na posição inicial "0". essa variavel é uma coleção de imagem, que vai começar do ZERO*/
let images = document.querySelectorAll("#slider img") /*pegando todas as imagens que esttão dentro de #slider */
let max = images.length /*maximo de imagem que existe*/

function nextImage(){
  /*Logica de proxima image e adicionar e remover classe*/
  images[currentImagemIndex].classList.remove("selected")

  currentImagemIndex++

  if(currentImagemIndex >= max){
    currentImagemIndex = 0
  }

  images[currentImagemIndex].classList.add("selected")
}

function start(){
  setInterval(() => {
    //aqui vai ficar a troca de image, a cada 2 segundos a função vai ser executada.
    nextImage()
  }, time)
}

window.addEventListener("load", start)