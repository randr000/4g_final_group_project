import React from 'react';

const MovieSearchCard = ({title, year, imdbID, poster}) => {

    return (
        <div className='card my-3' style={{width: '18rem'}}>
            <img src={poster} alt={`${title} Poster`} className='card-img-top' />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{`Year: ${year}`} </p>
                <p className="card-text">{`imdbID: ${imdbID}`} </p>
                <a href="#" className='btn btn-primary'>Add to Favorites</a>
            </div>
        </div>
    );
};

export default MovieSearchCard;