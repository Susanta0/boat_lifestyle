import { createContext, useState, } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(() => {
    // Initialize state from localStorage
    const token = localStorage.getItem('token');
    const userName = localStorage.getItem('userName');
    return {
      isLoggedIn: !!token,
      token: token,
      userName: userName
    };
  });

  const userLogin = (token, userName) => {
    // Save to localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('userName', userName);
    
    setLoginStatus({
      isLoggedIn: true,
      token: token,
      userName: userName
    });
  };

  const userLogout = () => {
    // Clear localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    
    setLoginStatus({
      isLoggedIn: false,
      token: null,
      userName: null
    });
  };

  return (
    <AuthContext.Provider value={{loginStatus, userLogin, userLogout}}>
      {children}
    </AuthContext.Provider>
  );
};