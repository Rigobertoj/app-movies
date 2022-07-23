const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY,
    },
});

/*utils*/
const createMovies = (movies, container ) => {
    container.innerHTML = '';

    movies.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');
        movieContainer.addEventListener('click', () => {
            location.hash = `#movie=`
        })
        
        const moveImg = document.createElement('img');
        moveImg.classList.add('movie-img')
        moveImg.alt = movie.original_title
        moveImg.src = `https://image.tmdb.org/t/p/w300${movie.poster_path}`

        movieContainer.appendChild(moveImg);
        container.appendChild(movieContainer)
    });
}

const createElementMovies = (content, data, route) =>  {
    content.innerHTML = '';
    data.forEach(element => {
        const categoryContainer = document.createElement('div')
        categoryContainer.classList.add('category-container')

        const categoryTitle = document.createElement('h3')
        categoryTitle.id = `id${element.id}`
        categoryTitle.classList.add('category-title');
        categoryTitle.addEventListener('click', () =>{
            location.hash = `#${route}=${element.id}-${element.name}`
            headerCategoryTitle.innerHTML = `${element.name}`
        })
        categoryTitle.innerHTML = `${element.name} ${element.id}`
        categoryContainer.appendChild(categoryTitle)
        content.appendChild(categoryContainer)
    });
}

/*call to API*/

const getTrendingMoviePreview = async () => {
    const { data } = await api('trending/movie/day')
    const Movies = data.results;
    const content = document.getElementById('trendingPreview-movieList')
    const movies = Movies.slice(0, 7)
    createMovies(movies, content,)
} 

const getCategoriesPreview = async () => {
    const { data } = await api('genre/movie/list')
    let dataCategories = await data.genres
    const categories = dataCategories.slice(0, 10)
    createElementMovies(categoriesPreviewList, categories, 'categories' )
}

async function getMoviesByCategory(id) {
    const { data } = await api('discover/movie', {
        params: {
            with_genres: id,
        },
    });
    const movies = data.results;
    genericSection.innerHTML = "";
    movies.forEach(movie =>{
        const movieContainer = document.createElement('div')
        movieContainer.classList.add('movie-container')
        movieContainer.addEventListener('click', () => {
            location.hash = `#movies=`
        })

        const movieImg = document.createElement('img')
        movieImg.classList.add('movie-img')
        movieImg.src = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
        movieImg.alt = `${movie.title}`

        movieContainer.appendChild(movieImg)
        genericSection.appendChild(movieContainer)
    })
}

const getTrendsMovies = async () => {
    const { data } = await api('trending/movie/day')
    const dataResults = await data.results
    const movies = dataResults.slice(0, 20)
    genericSection.innerHTML = '';
    headerCategoryTitle.innerHTML = `Tendencias`;
    movies.forEach(movie => {
        const movieContainer = document.createElement('div')
        movieContainer.classList.add('movie-container')
        movieContainer.addEventListener('click', () => {
            location.hash = `#movies=`
        })

        const movieImg = document.createElement('img')
        movieImg.classList.add('movie-img')
        movieImg.src = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
        movieImg.alt =  `${movie.title}`

        movieContainer.appendChild(movieImg)
        genericSection.appendChild(movieContainer)
    })
    
    
    console.log(dataResults)
}


