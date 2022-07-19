const API = 'https://api.temoviedb.org/3/trending/movie/day'

const getTrendingMoviePreview = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
    const data = await response.json()
    const content = document.getElementById('trendingPreview-movieList')
    const Movies = data.results;
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
getTrendingMoviePreview()

