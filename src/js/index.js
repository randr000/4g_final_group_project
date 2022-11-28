//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<BrowserRouter><Home /></BrowserRouter>, document.querySelector("#app"));

// console.log(process.env.NODE_ENV);
// console.log(process.env);
// console.log(process.env.REACT_APP_TEST);