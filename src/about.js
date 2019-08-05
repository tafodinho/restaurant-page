const aboutContent = `
    <h1>About</h1>
    <div class="about-content">
        <p>Wasabi's Sushi Bar serves a wide selection of sushi classics, such as sashimi, nigiri and maki sushi. In addition, our sushi chefs exhibit many modern interpretations and innovations of sushi 
            dishes in our specialty signature rolls. We take pride and passion in serving this artistic culinary form. The exclusive use of high quality and fresh ingredients is our top priority. 
        </p>
    </div>
`
const renderAbout = () => {
    const appArea = document.getElementById('app')
    appArea.innerHTML = aboutContent
}

export default renderAbout