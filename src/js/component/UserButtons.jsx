import React from 'react';
import { UserAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

const UserButtons = ()=> {

    const {user, logout} = UserAuth();
    const navigate = useNavigate();

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
            {
                user ?

				<div className='d-flex justify-content-center'>
					<button onClick={e => navigate('/account')} className="btn btn-primary me-2">Search Movies</button>
					<button onClick={handleLogout} className="btn btn-danger ms-2">Logout</button>
				</div> :

                <div className='d-flex justify-content-center'>
                    <button onClick={e => navigate('/')} className="btn btn-primary me-2">Sign In</button>
					<button onClick={e => navigate('/signup')} className="btn btn-info ms-2">Sign Up</button>
                </div>
			}
        </>
    );
};

export default UserButtons;