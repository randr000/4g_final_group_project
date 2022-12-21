import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext.jsx';
import { searchMovies } from '../async-functions.js';
import MovieSearchCard from './MovieSearchCard.jsx';
import BackgroundImg from "./BackgroundImg.jsx";

const Account = () => {

    const {user, logout} = UserAuth();
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);

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
        <>
          <nav className="navbar fixed-top navbar-light">
            <div className="container-fluid" id="nav">
              <a className="navbar-brand" href="/">
                <h4>YMdB</h4>
              </a>
              <button
                className="btn"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <i className="fa fa-bars"></i>
              </button>
            </div>
            <div className="collapse" id="collapseExample">
              <div className="card card-body">
                <p className="ms-2">Username: {user && user.displayName}</p>
                <p className="ms-2">User Email: {user && user.email}</p>
                <br />
                <div className="d-flex mt-2 justify-content-center">
                  {user && (
                    <button
                      onClick={(e) => navigate(`/profile/${user.displayName}`)}
                      className="btn btn-secondary me-1"
                    >
                      Go to Profile
                    </button>
                  )}
                  <button onClick={handleLogout} className="btn btn-dark ms-1">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <BackgroundImg />
          <div className="container">
            <form onSubmit={handleSearch} id="searchBar">
              <div className="d-flex">
                <label className="ms-2" htmlFor="search-movie-input" id="searchbar">
                  Search Movie
                </label>
                <input
                  type="text"
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-control mx-2"
                  placeholder="Enter movie name"
                  id="search-movie-input"
                />
                <button className="btn btn-info me-2">Search</button>
              </div>
            </form>
            <ul className="mt-3 d-flex justify-content-around flex-wrap" id="list">
              {movies ? (
                movies.map((m) => (
                  <MovieSearchCard
                    key={m.imdbID}
                    imdbID={m.imdbID}
                    title={m.Title}
                    year={m.Year}
                    poster={m.Poster}
                  />
                ))
              ) : (
                <p className="text-danger fs-1 fw-bold">Movie not found!</p>
              )}
            </ul>
          </div>
        </>
    );
};

export default Account;