
## Dicas para grid-template-columns

Dessa forma cada card terá o tamanho de 310px fixos
```css
.cards{
  display: grid;
  grid-template-columns: 310px 310px 310px;
}
```

Dessa forma os cards ficaram daptaveis de uma maneira mais inteligente. Onde o tamnho minimo é: 250px e o tamanho maximo é de 1fr. Assim não é necessario o uso de media querys.

```css
.cards{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```