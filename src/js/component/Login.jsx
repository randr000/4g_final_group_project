import React, { useState } from "react";
import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx";
import UsersFavoriteMovies from "./UsersFavoriteMovies.jsx";
import { Route, Routes } from "react-router";
import { AuthContextProvider } from "../context/AuthContext.jsx";

const Login = () => {

  const [displaySignup, setDisplaySignup] = useState(false);
  const [displayLoginCard, setDisplayLoginCard] = useState(false);

  return (
    <div> 
      {/* <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile/:username' element={<UsersFavoriteMovies />} />
        </Routes>
      </AuthContextProvider> */}
      {
        displaySignup ?
        <Signup setDisplaySignup={setDisplaySignup} displayLoginCard={displayLoginCard} setDisplayLoginCard={setDisplayLoginCard} /> :
        <Signin setDisplaySignup={setDisplaySignup} displayLoginCard={displayLoginCard} setDisplayLoginCard={setDisplayLoginCard} />
      }
    </div>
  );
};

export default Login;