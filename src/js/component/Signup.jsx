import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext.jsx';
import Hero from './Hero.jsx';

const Signup = ({setDisplaySignup, displayLoginCard, setDisplayLoginCard}) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const {createUser, user, logout} = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            if (username === '') throw new Error('Profile name must be at least one character');
            if (!RegExp(/^[A-Za-z0-9]*$/).test(username)) throw new Error('Profile name can only contain letters and numbers');
            await createUser(username, email, password);
            navigate('/account');

        } catch (event) {
            setError(event.message);
            console.log(error);
        }
        
    }

    return (
        <>
          <div className='navbar'>
          <h1 className='logo'>YMdB</h1>
    
              <button
                className="btn"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <i class="fa fa-bars" id="menu" onClick={e => setDisplayLoginCard(state => !state)}></i>
              </button>
            </div>
            <div className='fullScreen'>
            <div className={`collapse ${displayLoginCard && 'show'}`} id="collapseExample">
              <div className="card card-body">
                <div className="text-center fw-bold fs-2 mt-3">Sign Up</div>
    
                <div className="text-center fw-bold fs-5 mt-3">
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Profile Name</label>
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      id="username"
                      placeholder="Enter Profile Name"
                    />
                    <br />
                    <label htmlFor="email">Email</label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      id="email"
                      placeholder="Enter Email"
                    />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      id="password"
                      placeholder="Enter Password"
                    />
                    <br />
                    <br />
                    <button className="btn btn-dark">Sign Up</button>
                    <br />
                    <p className="text-danger fw-bold">{error && error}</p>
                    <br />
                    <div className="line"></div>
                    <div className="text-center fw-bold fs-6 mt-3">
                      <p>
                        Already have an account?{" "}
                        <a
                          className="link-primary"
                          onClick={e => setDisplaySignup(false)}
                        >
                          Sign In
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
                </div>
              </div>
            </div>
          
          <Hero />
        </>
    );
};

export default Signup;