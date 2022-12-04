import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext.jsx';
import { searchMovies } from '../async-functions.js';
import MovieSearchCard from './MovieSearchCard.jsx';

const Account = () => {

    const {user, logout} = UserAuth();
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState(false);

    const handleSearch = async (event) => {
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
            <p>Account: {user && user.displayName}</p>
            <p>User Email: {user && user.email}</p>

            <form onSubmit={handleSearch}>
                <label htmlFor="search-movie-input">Search Movie</label>
                <input type="text" onChange={e => setSearchTerm(e.target.value)} className='form-control' placeholder='Enter movie name' id='search-movie-input' />
                <button className='btn btn-info'>Search</button>
            </form>

            {user && <button onClick={e => navigate(`/profile/${user.displayName}`)} className='btn btn-primary'>Go to Profile</button>}
            <button onClick={handleLogout} className='btn btn-danger'>Logout</button>
            <ul className='mt-3 d-flex justify-content-around flex-wrap'>
                {movies ? movies.map(m => <MovieSearchCard key={m.imdbID} imdbID={m.imdbID} title={m.Title} year={m.Year} poster={m.Poster} />): <p>Movie not found!</p>}
            </ul>
        </div>
    );
};

export default Account;