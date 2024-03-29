import React from "react";
import { UserAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const UserButtons = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
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
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <p className="ms-2">Username: {user && user.displayName}</p>
            <p className="ms-2">User Email: {user && user.email}</p>
            <br />

            {user ? (
              <div className="d-flex justify-content-center">
                <button
                  onClick={(e) => navigate("/account")}
                  className="btn btn-primary me-2"
                >
                  Search Movies
                </button>
                <button onClick={handleLogout} className="btn btn-dark ms-2">
                  Logout
                </button>
              </div>
            ) : (
              <div className="d-flex justify-content-center">
                <button
                  onClick={(e) => navigate("/")}
                  className="btn btn-primary me-2"
                >
                  Sign In
                </button>
                <button
                  onClick={(e) => navigate("/signup")}
                  className="btn btn-info ms-2"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserButtons;
