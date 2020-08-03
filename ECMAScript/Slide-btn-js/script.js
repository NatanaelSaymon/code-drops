/* Função para pre-carregar as imagens */
let imgs = []
let slide
let imgAtual
let maxImage
let tempoTroca
let vtempo

function preCarregamento() {
  let img = 1
  for (let i = 0; i < 3; i++) {
    imgs[i] = new Image()
    imgs[i].src = "image/img" + img + ".jpg"
    img++
  }
}

function carregaImg(img) {
  slider.style.backgroundImage = "url('" + imgs[img].src + "')"
  slider.style.backgroundPosition = "center"
  slider.style.backgroundRepeat = "no-repeat"
  slider.style.backgroundSize = "cover"
}

function troca(direcao) {
  tempoTroca = 0
  imgAtual += direcao
  if (imgAtual > maxImage) {
    imgAtual = 0
  } else if (imgAtual < 0) {
    imgAtual = maxImage
  }
  carregaImg(imgAtual)
}

function anima() {
  tempoTroca++
  if (tempoTroca >= 500) {
    tempoTroca = 0
    troca(1)
  }
  window.requestAnimationFrame(anima)
}

function inicia() {
  preCarregamento()
  imgAtual = 0
  maxImage = imgs.length - 1
  slider = document.querySelector("#banner")
  carregaImg(imgAtual)
  tempoTroca = 0
  anima()
}

window.addEventListener("load", inicia)