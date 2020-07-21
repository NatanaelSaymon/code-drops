const root = document.querySelector('#root')

function write(tag, content){
  const title = `<${tag}>${content}</${tag}>`

  root.insertAdjacentHTML('beforeend', title)
}

write('h1', 'Dificuldade')

write('h2', 'Aprendendo')