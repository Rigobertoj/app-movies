searchFormBtn.addEventListener('click', () => {
    location.hash = '#search='
})

trendingBtn.addEventListener('click', () => {
    location.hash = '#trends'
})

arrowBtn.addEventListener('click', () => {
    location.hash = '#home'
});

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



function homepage(){
    console.log('homepage')

    headerSection.classList.remove('header-container--long')
    headerSection.style.background = ``;
    arrowBtn.classList.add('inactive')
    headerTitle.classList.remove('header-arrow--white')
    headerCategoryTitle.classList.add('inactive')
    headerTitle.classList.remove('inavtive')
    searchForm.classList.remove('inactive')

    trendingPreviewSection.classList.remove('inactive')
    categoriesPreviewSection.classList.remove('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.add('inactive')

    getTrendingMoviePreview()
    getCategoriesPreview()

}

function categoriesPage(){
    console.log('categories')

    headerSection.classList.remove('header-container--long')
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive')
    headerTitle.classList.remove('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')
}

function moviesDetailsPage(){
    console.log('Movie  Details')  

    headerSection.classList.add('header-container--long')
    // headerSection.style.background = '';
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.add('header-arrow--white')
    headerTitle.classList.add('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.add('inactive')
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.remove('inactive')
}

function searcPage(){
    console.log('searc Page')

    headerSection.classList.remove('header-container--long')
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive')
    headerTitle.classList.remove('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.add('inactive')
    searchForm.classList.remove('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')
}

function trendsPage() {
    headerSection.classList.remove('header-container--long')
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive')
    headerTitle.classList.remove('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.add('inactive')
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')
}

navegation()
