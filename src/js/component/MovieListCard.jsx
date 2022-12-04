import React, {useState, useEffect} from 'react';
import { fetchMovieDetails } from '../async-functions.js';
import { UserAuth } from '../context/AuthContext.jsx';
import { db } from '../firebase-config.js';
import { arrayRemove, doc, updateDoc } from 'firebase/firestore'

const MovieListCard = ({id, userId}) => {

    const [movieData, setMovieData] = useState({});
    const [show, setShow] = useState(true);
    const {user} = UserAuth();

    let uid;

    try {
        uid = user.uid;
    } catch (e) {
        uid = false;
    }

    async function handleDelete() {

        setShow(false);

        try {
            if (uid) {
                await updateDoc(doc(db, 'movieLists', uid), {
                    movies: arrayRemove(id)
                });
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
            fetchMovieDetails(id).then(res => setMovieData(res));
    }, []);

    return (
        <>
            {
                show ?
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
                                </div>
                            </div>
                            <div className="col col-1 d-flex justify-content-end align-items-baseline">
                                {
                                    uid === userId &&
                                    <span 
                                        className='mt-3 me-3 fw-bold fs-3 text-danger btn border border-danger rounded-circle'
                                        onClick={handleDelete}
                                    >
                                            X
                                    </span>
                                }
                            </div>
                        </div>
                    </div>
                </div> :
                null
            }
        </>
    );
};

export default MovieListCard;