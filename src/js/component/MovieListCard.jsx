import React, {useState, useEffect} from 'react';
import { fetchMovieDetails } from '../async-functions.js';
import { UserAuth } from '../context/AuthContext.jsx';

const MovieListCard = ({id, userId}) => {

    const [movieData, setMovieData] = useState({});
    const {user} = UserAuth();

    useEffect(() => {
            fetchMovieDetails(id).then(res => setMovieData(res));
    }, []);

    return (
        <div className="container-fluid">
            <div className='card my-5 mx-3'>
                <div className="row g-0">
                    <div className="col col-5">
                        <img className='img-fluid rounded-start' src={movieData.Poster} alt={`${movieData.Title} poster`} />
                    </div>
                    <div className="col col-6 d-flex justify-content-center align-items-center">
                        <div className="card-body">
                            <h5 className="card-title">{movieData.Title}</h5>
                            <p className="card-text">{`Year: ${movieData.Year}`}</p>
                            <p className="card-text">{`imdbID: ${id}`}</p>
                            <p className="card-text">{movieData.Plot}</p>
                            {console.log(movieData)}
                        </div>
                    </div>
                    <div className="col col-1 d-flex justify-content-end">
                        <span className='me-3 fw-bold fs-1 text-danger'>{user.uid === userId && 'X'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieListCard;