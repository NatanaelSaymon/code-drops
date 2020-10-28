
//Pegando a quantidade total de slides
let totalSlides = document.querySelectorAll('.slider__item').length

//Cada slide dentro da "div.slider" vai ter a largura total da tela
document.querySelector('.slider').style.width = `calc(100vw * ${totalSlides})`

/*
Pegando a altura do banner, atraves da propriedade "clientHeight" 
e jogando em div.slider__controls para que os controles possam 
ficar alinhandos ao centro dos slides com a propriedade 
"align-items: center;" no css.
*/
document.querySelector('.slider__controls').style.height = 
    `${document.querySelector('.banner').clientHeight}px`


//Controles dos Slides
const goPrev = document.querySelector('.js-goPrev')
const goNext = document.querySelector('.js-goNext')

let currentSlide = 0 //Slide atual "comecando com 0"

function nextImage() {
    currentSlide++ //ao clicar no botao o currenSlide ganha +1
    if(currentSlide > (totalSlides - 1)){
        currentSlide = 0
    }
    updateMargin() //Atualiza a margin para fazer o slide rodar
}

function prevImage() {
    currentSlide--
    if(currentSlide < 0){
        currentSlide = totalSlides - 1
    }
    updateMargin() //Atualiza a margin para fazer o slide rodar
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider__item').clientWidth
    let newMargin = (currentSlide * sliderItemWidth)
    document.querySelector('.slider').style.marginLeft = `-${newMargin}px`
}

//Capturando o clique do botao para foto anterior e ativando a funcao "prevImage"
goPrev.addEventListener("click", prevImage)

//Capturando o clique do botao para proxima foto e ativando a funcao "nextImage"
goNext.addEventListener("click", nextImage)


/* Pula para proxima imagem automaticamente*/
//setInterval(nextImage, 4000)