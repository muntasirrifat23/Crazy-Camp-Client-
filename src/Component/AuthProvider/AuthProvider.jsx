import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase.config';
import axios from 'axios';

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
// update
const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    });
}

useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, loggedUser=>{
        setUser(loggedUser);
        // setLoading(false);
        if(loggedUser){
            axios.post('https://assignment-12-server-muntasirrifat23.vercel.app/jwt',{email:loggedUser.email})
            .then(data =>{
                localStorage.setItem('token', data.data.token)
                setLoading(false);
            })
        }
        else{
            localStorage.removeItem('remove token')
        }
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
    loading,
    updateUserProfile
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