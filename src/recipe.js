const recipeContent = `
    <h1>Todays' Menu</h1>
    <div class="recipe-content">
        <p>
            <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Blue chicken
            </a>
            <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                soup goat meat
            </a>
            <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Fried Onions
            </a>
        </p>
        <div class="collapse" id="collapseExample">
            <div class="card card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
        </div>
    </div>
`
const renderRecipe = () => {
    const appArea = document.getElementById('app')
    appArea.innerHTML = recipeContent
}

export default renderRecipe