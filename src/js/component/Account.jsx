import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext.jsx';
import { searchMovies } from '../async-functions.js';
import MovieSearchCard from './MovieSearchCard.jsx';

const Account = () => {

    const {user, logout} = UserAuth();
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');

    const handleSearch = async (event) => {
        
        setError('');

        try {
            event.preventDefault();
            const results = await searchMovies(searchTerm);
            results.Response ? setMovies(results.Search) : setMovies(false);

        } catch (e) {
            console.log(e.message);
        }
    }

    const handleLogout = async () => {

        try {
            await logout();
            navigate('/');
        } catch (e) {
            console.log(e.message);
        }
    }

    return (
        <div>
            <p className='ms-2'>Username: {user && user.displayName}</p>
            <p className='ms-2'>User Email: {user && user.email}</p>

            <form onSubmit={handleSearch}>
                <label className='ms-2' htmlFor="search-movie-input">Search Movie</label>
                <div className="d-flex">
                    <input type="text" onChange={e => setSearchTerm(e.target.value)} className='form-control mx-2' placeholder='Enter movie name' id='search-movie-input' />
                    <button className='btn btn-info me-2'>Search</button>
                </div>
            </form>

            <div className="d-flex mt-2 justify-content-center">
                {user && <button onClick={e => navigate(`/profile/${user.displayName}`)} className='btn btn-primary me-1'>Go to Profile</button>}
                <button onClick={handleLogout} className='btn btn-danger ms-1'>Logout</button>
            </div>

            {/* {
                error ?
                <p className='text-danger fs-1 fw-bold'>{error}</p> :
                <ul className='mt-3 d-flex justify-content-around flex-wrap'>
                    {movies.length > 1 && movies.map(m => <MovieSearchCard key={m.imdbID} imdbID={m.imdbID} title={m.Title} year={m.Year} poster={m.Poster} />)}
                </ul>
            } */}
            <ul className='mt-3 d-flex justify-content-around flex-wrap'>
                {movies ? movies.map(m => <MovieSearchCard key={m.imdbID} imdbID={m.imdbID} title={m.Title} year={m.Year} poster={m.Poster} />): <p className='text-danger fs-1 fw-bold'>Movie not found!</p>}
            </ul>
        </div>
    );
};

export default Account;