import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase.config';

export const AuthContest= createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const[user, setUser] = useState({})
    const[loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
// Google
const googleSignIn= () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
}
// Create user
const createUser=(email, password)=>{
    setLoading(true);
    createUser
    return createUserWithEmailAndPassword(auth, email, password);
}
//Login
const signIn=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
 }
// Sign out  
const logOut=()=>{
    setLoading(true);
    return signOut(auth);
}
useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, loggedUser=>{
        setUser(loggedUser);
        setLoading(false);
   });
   return()=> {
       unsubscribe();
    };
},[])

const authInfo={
    createUser,
    signIn,
    logOut,
    googleSignIn,
    user,
    loading
}


    return (
        <div>
             <AuthContest.Provider value={authInfo}>
                {children}
            </AuthContest.Provider>
        </div>
    );
};

export default AuthProvider;