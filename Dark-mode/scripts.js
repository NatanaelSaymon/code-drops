const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => window.getComputedStyle(html).getPropertyValue(style)

const initalColors = {
  bg: getStyle(html, "--bg"),
  bgPanel: getStyle(html, "--bg-panel"),
  colorHeadings: getStyle(html, "--color-headings"),
  colorText: getStyle(html, "--color-text"),
}

const darkMode = {
  bg: "#333333",
  bgPanel: "#434343",
  colorHeadings: "#3664ff",
  colorText: "#B5B5B5"
}

/* começa com -- e procure tudo que começe com letras maiuscula e coloque na variavel $1 que tenh um traço a frente
e transforme tudo em minusculo
*/
const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
  Object.keys(colors).map(key =>
      html.style.setProperty(transformKey(key), colors[key])
    )
}

checkbox.addEventListener("change", ({target}) => {
  target.checked ? changeColors(darkMode) : changeColors(initalColors)
})