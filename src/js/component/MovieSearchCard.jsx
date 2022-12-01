import React, { useState } from 'react';
import { UserAuth } from '../context/AuthContext.jsx';
import { db } from '../firebase-config.js';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const MovieSearchCard = ({title, year, imdbID, poster}) => {

    const [addedFav, setAddedFav] = useState(false);

    const {user} = UserAuth();

    async function handleAddFav() {
        try {
            // const docSnap = await getDoc(db, 'movieLists', user.uid);
            // if (!docSnap.exists()) {
            //     await setDoc(doc(db, 'movieLists', user.uid), {
            //         movies: []
            //     });
            // }
            await setDoc(doc(db, 'movieLists', user.uid), {
                movies: [imdbID]
            });

            setAddedFav(true);
        } catch (e) {
            console.log(e.message);
        }
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