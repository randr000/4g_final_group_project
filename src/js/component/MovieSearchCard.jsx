import React, { useState } from 'react';

const MovieSearchCard = ({title, year, imdbID, poster}) => {

    const [addedFav, setAddedFav] = useState(false);

    function handleAddFav() {
        setAddedFav(true);
    }

    return (
        <div className='card my-3' style={{width: '18rem'}}>
            <img src={poster} alt={`${title} Poster`} className='card-img-top' />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{`Year: ${year}`} </p>
                <p className="card-text">{`imdbID: ${imdbID}`} </p>
                {
                    addedFav ?
                    <button disabled={true} className='btn btn-success'>Added to Favorites</button> :
                    <button className='btn btn-primary' onClick={handleAddFav}>Add to Favorites</button>
                }
                
            </div>
        </div>
    );
};

export default MovieSearchCard;