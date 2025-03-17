import { createContext, useState, useEffect } from "react";

export const AuthContex = createContext();

export const AuthContextProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(() => {
    // Initialize state from localStorage
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("userName");
    const userId = localStorage.getItem("userId");
    return {
      isLoggedIn: !!token,
      token: token,
      userName: userName,
      userId: userId,
    };
  });

  const userLogin = (token, userName, userId) => {
    // Save to localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("userName", userName);
    localStorage.setItem("userId", userId);

    setLoginStatus({
      isLoggedIn: true,
      token: token,
      userName: userName,
      userId: userId,
    });
  };

  const userLogout = () => {
    // Clear localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");

    setLoginStatus({
      isLoggedIn: false,
      token: null,
      userName: null,
      userId: null,
    });
  };

  return (
    <AuthContex.Provider value={{ loginStatus, userLogin, userLogout }}>
      {children}
    </AuthContex.Provider>
  );
};
