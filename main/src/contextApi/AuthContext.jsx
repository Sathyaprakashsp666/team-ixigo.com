import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [userin, setUserIn] = useState(false);
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [url, setUrl] = useState("");

  const value = {
    userin,
    setUserIn,
    name,
    setName,
    gmail,
    setGmail,
    url,
    setUrl,
  };
  // localStorage.setItem("userLogin", JSON.stringify(value));


  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
