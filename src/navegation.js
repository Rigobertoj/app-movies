const navegation = () => {
    console.log({ location })
    if(location.hash.startsWith('#trends')){
        trendsPage()
    } else if (location.hash.startsWith('#search=')){
        searcPage()
    } else if (location.hash.startsWith('#movies=')){
        moviesDetailsPage()
    } else if (location.hash.startsWith('#categories=')){
        categoriesPage()
    } else{
        homepage()
    }
    

    location.hash 
}

window.addEventListener('DOMContentLoaded', navegation, false);
window.addEventListener('hashchange', navegation, false);

function trendsPage() {
    console.log('trends')
}

function homepage(){
    getTrendingMoviePreview()
    getCategoriesPreview()

}

function categoriesPage(){
    console.log('categories')
}

function moviesDetailsPage(){
    console.log('Movie  Details')  
}

function searcPage(){
    console.log('searc Page')
}


navegation()
