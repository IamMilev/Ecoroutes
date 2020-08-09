import React, { useState, useEffect } from "react";
import Axios from "axios";
import UserContext from "./context/userContext";
import "./style.css";

const App = (props) => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
    loggedIn: false
  });

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");

      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
        setUserData({ token: undefined, user: undefined, loggedIn: false})
      }

      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );

      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
          loggedIn: true
        });
      }

      setLoading(false)
    };

    checkLoggedIn();
  }, []);
  console.log(userData);

  if (loading) {
    return (
        <div>Loading...</div>
    )
  }

  return (
        <UserContext.Provider value={{ userData, setUserData }}>
          {props.children}
        </UserContext.Provider>
  );
}

export default App
