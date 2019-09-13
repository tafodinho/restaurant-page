const htmlContent = {
	heading: "Welcome to the best restaurant in the south bay",
	content: [
		{
			image: "../assets/images/food1.jpeg",
			text: "Some quick example text to build on the card title and make up the bulk of the card's content."
		},
		{
			image: "../assets/images/food2.jpg",
			text: "Some quick example text to build on the card title and make up the bulk of the card's content."
		},
		{
			image: "../assets/images/food3.jpg",
			text: "Some quick example text to build on the card title and make up the bulk of the card's content."
		},
	]
}

const initDisplay = () => {
	const appArea = document.getElementById("app")
	const contentDiv = document.createElement("div")
	const heading = document.createElement("h1")
	htmlContent.content.forEach((element) => {
		const colDiv = document.createElement("div")
		const image = document.createElement("img")
		const cardDiv = document.createElement("div")
		const cardBodyDiv = document.createElement("div")
		const paragragh = document.createElement("p")
		colDiv.setAttribute("class", "col-sm-4")
		cardDiv.setAttribute("class", "card")
		cardDiv.style.width = "18rem"
		image.setAttribute("class", "card-img-top")
		image.setAttribute("src", element.image)
		cardBodyDiv.setAttribute("calss", "card-body")
		paragragh.setAttribute("class", "card-text")
		paragragh.prepend(element.text) 
		cardBodyDiv.appendChild(paragragh)
		cardDiv.appendChild(image)
		cardDiv.appendChild(cardBodyDiv)
		colDiv.appendChild(cardDiv)
		contentDiv.appendChild(colDiv)
	})
	contentDiv.setAttribute("class", "app-content row")
	appArea.innerHTML = ""
	heading.prepend(htmlContent.heading)
	appArea.appendChild(heading)
	appArea.appendChild(contentDiv)
}

export default initDisplay