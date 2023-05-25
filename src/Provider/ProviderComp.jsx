import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firbase/Firbase.config";

// createContext
export const legoContext = createContext(null);

// component
const ProviderComp = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  //function

  const createAccount = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const logIn = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const googleIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  // useEffext
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
    });
  }, []);

  //value
  const contextInfo = {
    auth,
    user,
    loading,
    logIn,
    createAccount,
    logOut,
    googleIn,
  };
  return (
    <legoContext.Provider value={contextInfo}>{children}</legoContext.Provider>
  );
};

export default ProviderComp;
