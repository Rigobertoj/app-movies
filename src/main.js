const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY,
    },
});


const getTrendingMoviePreview = async () => {
    const { data } = await api('trending/movie/day')
    const Movies = data.results;
    const content = document.getElementById('trendingPreview-movieList')
    const movies = Movies.slice(0, 7)
    movies.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');
        
        const moveImg = document.createElement('img');
        moveImg.classList.add('movie-img')
        moveImg.alt = movie.original_title
        moveImg.src = `https://image.tmdb.org/t/p/w300${movie.poster_path}`

        movieContainer.appendChild(moveImg);
        content.appendChild(movieContainer)
    });
} 

const getCategoriesPreview = async () => {
    const { data } = await api('genre/movie/list')
    let dataCategories = data.genres
    const categories = dataCategories.slice(0, 10)
    const content = document.getElementById('categoriesPreview-list')
    categories.forEach(category => {
        const categoryContainer = document.createElement('div')
        categoryContainer.classList.add('category-container')

        const categoryTitle = document.createElement('h3')
        categoryTitle.id = `id${category.id}`
        categoryTitle.classList.add('category-title');
        categoryTitle.innerHTML = `${category.name}`

        categoryContainer.appendChild(categoryTitle)
        content.appendChild(categoryContainer)
    });
}
