const htmlContent = `
    <h1>Welcome to the best restaurant in the south bay</h1>
    <div class="app-content row">
        <div class="col-sm-4">
            <div class="card" style="width: 18rem;">
                <img src="../assets/images/food1.jpeg" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card" style="width: 18rem;">
                <img src="../assets/images/food2.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card" style="width: 18rem;">
                <img src="../assets/images/food3.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    </div>
`
const initDisplay = () => {
    const appElement = document.getElementById('app')
    appElement.innerHTML = htmlContent
}

export default initDisplay;