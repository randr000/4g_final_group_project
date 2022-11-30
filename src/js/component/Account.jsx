import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext.jsx';

const Account = () => {

    const {user, logout} = UserAuth();
    const navigate = useNavigate();

    const [movies, setMovies] = useState(false);

    useEffect(() => {
        console.log(`user: ${!!user}`);
    }, []);

    const handleFetch = async () => {
        try {
            fetch(`https://www.omdbapi.com/?s=batman&apikey=${process.env.REACT_APP_OMDB}`)
                .then(res => res.json())
                .then(res => res['Response'] ? setMovies(res['Search']) : null);

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
            Account:
            <p>User Email: {user && user.email}</p>
            <button onClick={handleLogout} className='btn btn-primary'>Logout</button>
            <button onClick={handleFetch} className='btn btn-info'>Fetch</button>
            <ul>
                {movies ? movies.map(m => <p>{m.Title}</p>): null}
            </ul>
        </div>
    );
};

export default Account;