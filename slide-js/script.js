
/* Função para pre-carregar as imagens */
let imgs = []
let slide
let imgAtual
let maxImage
let tempoTroca = 3000

function preCarregamento(){
  let img = 1
  for(let i = 0; i < 3; i++){
    imgs[i] = new Image()
    imgs[i].src="image/img"+img+".jpg"
    img++
  }
}

function carregaImg(img){
  slider.style.backgroundImage = "url('"+imgs[img].src+"')"
  slider.style.backgroundPosition = "center"
  slider.style.backgroundRepeat = "no-repeat"
  slider.style.backgroundSize = "cover"
}

function troca(){
  imgAtual++
  if(imgAtual > maxImage){
    imgAtual = 0
  }
  carregaImg(imgAtual)
}

function inicia(){
  preCarregamento()
  imgAtual = 0
  maxImage = imgs.length - 1
  slider = document.querySelector("#banner")
  carregaImg(imgAtual)
  setInterval(troca, tempoTroca)
}

window.addEventListener("load", inicia)