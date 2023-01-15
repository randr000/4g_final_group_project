import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext.jsx";
import Hero from "./Hero.jsx";

const Signin = ({
  setDisplaySignup,
  displayLoginCard,
  setDisplayLoginCard,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      await signIn(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <>
      <div className="navbar">
        <h1 className="logo">
          <a className="logo" href="/">
            YMdB
          </a>{" "}
        </h1>

        <button
          className="btn"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <i
            class="fa fa-bars"
            id="menu"
            onClick={(e) => setDisplayLoginCard((state) => !state)}
          ></i>
        </button>
      </div>
      <div className="fullScreen">
        <div
          className={`collapse ${displayLoginCard && "show"}`}
          id="collapseExample"
        >
          <div className="card card-body" id="card">
            <div className="text-center fw-bold fs-2 mt-3">Sign In</div>

            <div className="text-center fw-bold fs-5 mt-3">
              <form onSubmit={handleSubmit}>
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
                <button className="btn btn-dark">Sign In</button>
                <br />
                <p className="text-danger fw-bold">{error && error}</p>
                <br />
                <div className="line"></div>
                <div className="text-center fw-bold fs-6 mt-3">
                  <p id="dont">
                    Don't have an account?{" "}
                    <a
                      className="link-primary"
                      onClick={(e) => setDisplaySignup(true)}
                    >
                      Sign Up
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div></div>

      <Hero />
    </>
  );
};

export default Signin;
