import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext.jsx';
import Background from "./Background.jsx";

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
            if (username === '') throw new Error('Username must be longer than one character');
            if (!RegExp(/^[A-Za-z0-9]*$/).test(username)) throw new Error('Username can only contain letters and numbers');
            await createUser(username, email, password);
            navigate('/account');

        } catch (event) {
            setError(event.message);
            console.log(error);
        }
        
    }

    return (
        <>
          <nav className="navbar fixed-top navbar-light " id="bar">
            <div className="container-fluid" id="nav">
              <a className="navbar-brand" href="/">
                <h4>YMdB</h4>
              </a>
    
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
            <div className={`collapse ${displayLoginCard && 'show'}`} id="collapseExample">
              <div className="card card-body">
                <div className="text-center fw-bold fs-2 mt-3">Sign Up</div>
    
                <div className="text-center fw-bold fs-5 mt-3">
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      id="username"
                      placeholder="Enter Username"
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
          </nav>
          <Background />
        </>
    );
};

export default Signup;