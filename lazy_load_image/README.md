
## Lazy Load

Para criar esse exemplo iremos usar uma função chamada: **get.BoundingClientRect()**

- O método Element.getBoundingClientRect() retorna o tamanho de um elemento e sua posição relativa ao viewport.
- Para saber mais, da um google: mdn BoundingClientRect

**Explicação:**

Para fazer esse efeito de Lazy Load nas imagens + animação no scroll, primeiro temos que monitorar no scroll, para saber se elas estão apareceno na tela ou não: 

Como temos mais de uma imagem, então vamos pegar a primeira imagem e saber qual a **distancia** dessa imagem para o **topo** do site.

````js
document.querySelectorAll('img')[0].getBoundingClientRect().top
````

OSB: Para exemplificar melhor, bastar abrir o console no browser e inserir o codigo acima.

Para cada scroll dado na pagina, a distancia da imagem para o top do site vai ser menor, ou seja **se a distancia for menor que o tamanho da window(tela) sabemos que a imagem apareceu na tela**. 

Então vamos comparar todas as imagems que temos na pagina e perguntar para o navegador se elas estão aparecendo ou não.

````js
function ativaScroll(){
  document.querySelectorAll('img').forEach((img, index) => {
    if(img.getBoundingClientRect().top < window.innerHeight){
      img.src = img.getAttribute('data-src')
    }
  })
}

window.addEventListener('scroll', ativaScroll)
````
- Estamos pegando todas as imagens: **document.querySelectorAll('img')**

- Estrutura de tomada de decisão: **if(img.getBoundingClientRect().top < window.innerHeight)**

- Se a tomada de decisão retornar **true** o img.src vai receber das as imagens que tiverem com o atributo **data-src**

- Observe que colocamos um codigo que vai observar o **scroll** da tela do navegador, caso haja, algum scroll, uma função vai ser chamada: **window.addEventListener('scroll', ativaScroll)**