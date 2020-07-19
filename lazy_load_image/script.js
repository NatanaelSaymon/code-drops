function ativaScroll(){
  document.querySelectorAll('img').forEach((img, index) => {
    if(img.getBoundingClientRect().top < window.innerHeight){
      img.src = img.getAttribute('data-src')
    }
  })
}

window.addEventListener('scroll', ativaScroll)