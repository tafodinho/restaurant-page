const recipeContent = {
	heading: "Todays' Menu",
	content: [
		"Blue chicken",
		"Pepe Soup Goat Meat",
		"Friend Onions"
	]
}

const renderRecipe = () => {
	const appArea = document.getElementById("app")
	const heading = document.createElement("h1")
	const recipeDiv = document.createElement("div")
	const paragraph = document.createElement("p")
    
	recipeContent.content.forEach(element => {
		const anchor = document.createElement("a")
		anchor.setAttribute("class", "btn btn-primary")
		anchor.setAttribute("href", "#")
		anchor.prepend(element)
		paragraph.appendChild(anchor)
	})
	recipeDiv.setAttribute("class", "recipe-content")
	heading.prepend(recipeContent.heading)
	recipeDiv.appendChild(paragraph)
	appArea.innerHTML = "   "
	appArea.appendChild(heading)
	appArea.appendChild(recipeDiv)
}

export default renderRecipe