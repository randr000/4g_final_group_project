import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { db } from '../firebase-config.js';
import { doc, getDoc } from 'firebase/firestore'
import MovieListCard from './MovieListCard.jsx';
import UserButtons from './UserButtons.jsx';


const UsersFavoriteMovies = () => {

    const {username} = useParams();
    const [movieIds, setMovieIds] = useState([]);
    const [userId, setUserId] = useState('');

    useEffect(() => {

        getMovies();

    }, []);

    async function getMovies() {

        try {
            const docSnap = await getDoc(doc(db, 'usernames', username));
            const uid = docSnap.data().uid;
            const docMovieSnap = await getDoc(doc(db, 'movieLists', uid));
            setMovieIds(docMovieSnap.data().movies);
            setUserId(uid);

        } catch (e) {
            console.log(e.message);
        }
    }

    return (
        <>
            <UserButtons />
            <h1 className='display-1 text-center'>
                {`${username}'${username.charAt(username.length - 1) === 's' ? '' : 's'} favorite movie${movieIds.length > 1 ? 's' : ''}`}
            </h1>
            {movieIds.map(id => <MovieListCard key={id} id={id} userId={userId} />)}
        </>
    );
};

export default UsersFavoriteMovies;