import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";

// -------------

const AuthContext = createContext(null);

// -------------

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   providers
  const gmailProvider = new GoogleAuthProvider();

  //   ---------------Login------------------

  //   email and password login
  const EmailLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   login with gmail
  const signinWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, gmailProvider);
  };

  //-------------------signup-----------------------

  const CreateUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  //   ----------------------Catch user--------------------------

  useEffect(() => {
    const disconnect = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => disconnect;
  }, []);

  //   ------------------logout------------------------
  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    logOut,
    loading,
    setUser,
    updateUser,
    EmailLogin,
    CreateUser,
    signinWithGoogle,
  };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;
export { AuthContext };
