import React from "react";
import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx";
import Account from "./Account.jsx";
import UsersFavoriteMovies from "./UsersFavoriteMovies.jsx";
import { Route, Routes } from "react-router";
import { AuthContextProvider } from "../context/AuthContext.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

//create your first component
const Home = () => {

	return (
		<div>
			<h1 className="text-center mt-3 fw-bold fs-1">
				Favorite Movies App
			</h1>
			

			<AuthContextProvider>
				<Routes>
					<Route path='/' element={<Signin />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/account' element={
						<ProtectedRoute><Account /></ProtectedRoute>
					} />
					<Route path='/profile/:username' element={<UsersFavoriteMovies />} />
				</Routes>
			</AuthContextProvider>

			
		</div>
	);
};

export default Home;
