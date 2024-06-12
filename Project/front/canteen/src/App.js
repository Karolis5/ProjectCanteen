import React, { useContext } from "react"; // Import useContext
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CreateMeal from "./components/CreateMeal";
import Home from "./components/Home";
import Login from "./components/Login";
import { LoginContext } from "./components/LoginProvider"; // Import LoginContext
import MealComponent from "./components/MealComponent";
import SignOutButton from "./components/SignOutButton";
import Signup from "./components/Signup";

function App() {
  const { isLoggedIn } = useContext(LoginContext); // Use LoginContext to get the login state

  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          // If the user is logged in, render the home page and other routes
          <>
            <Route path="/home" element={<Home />} /> {/* Add a route for the Home component */}
            <Route path="/meals" element={<MealComponent />} /> 
            <Route path="/create" element={<CreateMeal />} /> 
            <Route path="/signout" element={<SignOutButton />} />
            <Route path="/" element={<Navigate to="/home" replace />} /> {/* Navigate to /home */}
          </>
        ) : (
          // If the user is not logged in, render the login and register routes
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/" element={<Navigate to="/login" replace />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;

