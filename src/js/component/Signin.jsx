import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext.jsx';

const Signin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const {signIn} = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            const x = await signIn(email, password);
            // x.then(e => console.log(e));
            console.log(x.user.uid);
            navigate('/account');
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    }

    return (
        <div className='text-center fw-bold fs-3 mt-3'>
            Sign In
            <p>Don't have an account? <Link className='link-primary' to='/signup'>Sign Up</Link></p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input onChange={e => setEmail(e.target.value)}type="email" id="email" placeholder="Enter Email"/>
                <br />
                <label htmlFor="password">Password</label>
                <input onChange={e => setPassword(e.target.value)}type="password" id="password" placeholder="Enter Password"/>
                <br />
                <button className="btn btn-primary">Sign In</button>
            </form>
        </div>
    );
};

export default Signin;