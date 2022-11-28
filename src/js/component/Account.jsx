import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext.jsx';

const Account = () => {

    const {user, logout} = UserAuth();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(`user: ${!!user}`);
    }, []);

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
        </div>
    );
};

export default Account;