import React from "react";
import MealComponent from "./MealComponent";
import SignOutButton from "./SignOutButton";
function Home() {
  return (
    <div>
      <h1>Welcome to the Homepage!</h1>
      <MealComponent />
      <SignOutButton />
      
    </div>
  );
}

export default Home;
