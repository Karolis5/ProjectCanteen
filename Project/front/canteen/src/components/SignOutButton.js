import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./LoginProvider"; // Import the LoginContext
import "./style.css";

function SignOutButton() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext); // Use the context
  const [showModal, setShowModal] = useState(false); // Tracks modal visibility

  const signout = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/auth/signout", {
        withCredentials: true,
      });

      if (response.status === 200) {
        setIsLoggedIn(false);
        setShowModal(false);
        navigate("/login");
      } else {
        throw new Error("Signout failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p className="Logged-in-text">User is logged in</p>
          <button className="sign-out-btn" onClick={openModal}>⚙️</button> 
          {showModal && (
            <div className="modal">
              <h2>Sign Out</h2>
              <p>Are you sure you want to sign out?</p>
              <button className="btn-yes" onClick={signout}>Yes</button>
              <button className="btn-no" onClick={() => setShowModal(false)}>No</button>
            </div>
          )}
        </div>
      ) : (
        <p className="Logged-in-text">User is not logged in</p>
      )}
    </div>
  );
}

export default SignOutButton;
