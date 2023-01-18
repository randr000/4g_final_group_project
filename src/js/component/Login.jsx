import React, { useState } from "react";
import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx";

const Login = () => {

  const [displaySignup, setDisplaySignup] = useState(false);
  const [displayLoginCard, setDisplayLoginCard] = useState(false);

  return (
    <div> 
      {
        displaySignup ?
        <Signup setDisplaySignup={setDisplaySignup} displayLoginCard={displayLoginCard} setDisplayLoginCard={setDisplayLoginCard} /> :
        <Signin setDisplaySignup={setDisplaySignup} displayLoginCard={displayLoginCard} setDisplayLoginCard={setDisplayLoginCard} />
      }
    </div>
  );
};

export default Login;