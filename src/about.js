const aboutContent = {
    heading: "About",
    text: `
        Wasabi's Sushi Bar serves a wide selection of sushi classics, such as sashimi, nigiri and maki sushi. In addition, our sushi chefs exhibit many modern interpretations and innovations of sushi 
        dishes in our specialty signature rolls. We take pride and passion in serving this artistic culinary form. The exclusive use of high quality and fresh ingredients is our top priority.
    `
}

const renderAbout = () => {
    const appArea = document.getElementById('app')
    const heading = document.createElement('h1');
    const content = document.createElement('p');
    const appAreaDiv = document.createElement('div');
    appArea.innerHTML = ''
    appAreaDiv.classList.add('app-content'); 
    heading.innerText = aboutContent.heading;
    content.innerText = aboutContent.text;
    appAreaDiv.appendChild(heading);
    appAreaDiv.appendChild(content);
    appArea.appendChild(appAreaDiv);
}

export default renderAbout