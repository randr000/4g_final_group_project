import React from "react";
import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx";
import UsersFavoriteMovies from "./UsersFavoriteMovies.jsx";
import { Route, Routes } from "react-router";
import { AuthContextProvider } from "../context/AuthContext.jsx";

const Login = () => {
  return (
    <div> 
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile/:username' element={<UsersFavoriteMovies />} />
        </Routes>
      </AuthContextProvider></div>
  );
};

export default Login;