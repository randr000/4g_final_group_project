import React from "react";
import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx";
import Account from "./Account.jsx";
import UsersFavoriteMovies from "./UsersFavoriteMovies.jsx";
import { Route, Routes } from "react-router";
import { AuthContextProvider } from "../context/AuthContext.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Login from "./Login.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {

	return (
		<>
		  <Login />
	
		  <div className="none">
			<AuthContextProvider>
			  <Routes>
				<Route
				  path="account"
				  element={
					<ProtectedRoute>
					  <Account />
					</ProtectedRoute>
				  }
				/>
			  </Routes>
			</AuthContextProvider>
		  </div>
		  <Footer />
		</>
	);
};

export default Home;
