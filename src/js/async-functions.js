const omdbEndpoint = 'https://www.omdbapi.com/?';

export async function searchMovies(movie) {

    const res = await fetch(`${omdbEndpoint}s=${movie}&apikey=${process.env.REACT_APP_OMDB}`);
    const data = await res.json();

    return data;
}