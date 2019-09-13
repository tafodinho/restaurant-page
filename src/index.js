import initDisplay from './home'
import renderAbout from './about'
import renderRecipe from './recipe'

window.onload = () => {
    initDisplay()
}

document.getElementById('about').addEventListener("click", () => {
    renderAbout()
})

document.getElementById('home').addEventListener("click", () => {
    initDisplay()
})

document.getElementById('recipe').addEventListener("click", () => {
    renderRecipe()
})