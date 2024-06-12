import React, { createContext, useState } from "react";

// Create a context for the login state
export const LoginContext = createContext();

// Create a provider component
export function LoginProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;