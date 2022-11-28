import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext.jsx';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const {createUser} = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            await createUser(email, password);
            navigate('/account');
        } catch (event) {
            setError(event.message);
            console.log(error);
        }
    }

    return (
        <div className='text-center fw-bold fs-3 mt-3'>
            Sign Up
            <p>Already have an account? <Link className='link-primary' to='/'>Sign In</Link></p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input onChange={e => setEmail(e.target.value)} type="email" id="email" placeholder="Enter Email"/>
                <br />
                <label htmlFor="password">Password</label>
                <input onChange={e => setPassword(e.target.value)} type="password" id="password" placeholder="Enter Password"/>
                <br />
                <button className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;