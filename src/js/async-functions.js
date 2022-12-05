const omdbEndpoint = 'https://www.omdbapi.com/?';

export async function searchMovies(movie) {

    const res = await fetch(`${omdbEndpoint}s=${movie}&apikey=${process.env.REACT_APP_OMDB}`);
    const data = await res.json();
    return data;
}

export async function fetchMovieDetails(movieId) {

    const res = await fetch(`${omdbEndpoint}i=${movieId}&plot=full&apikey=${process.env.REACT_APP_OMDB}`);
    const data = await res.json();
    return data;
}