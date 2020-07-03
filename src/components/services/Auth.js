import React, { useEffect, useState } from "react";
import firebase from "./firebase";
import { Spinner } from "reactstrap";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return (
      <Spinner
        style={{
          width: "10rem",
          height: "10rem",
          color: "#ffcc29",
          margin: "50vh 40vw",
        }}
        type="grow"
      />
    );
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
