import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/realEstates';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
const [user,setUser] = useState(null);
const [loading ,setLoading] = useState (true)

const createUserWithEmailAndPassFunction = (email,password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}
const updateProfileFunction =(displayName,photoURL) => {
    return updateProfile(auth.currentUser,{
        displayName,
        photoURL
    })
}

const signInWithEmailAndPassFunction = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword (auth, email, password)
}
 const signInWithEmailFunction =() => {
    setLoading(true)
    return  signInWithPopup(auth, googleProvider)
 }

 const signOutFunction = () =>{
    setLoading(true)
    return signOut(auth)
 }

 const sendPasswordResetEmailFunction = (email) =>{
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
 }
const authInfo={
user,
setUser,
createUserWithEmailAndPassFunction,
signInWithEmailAndPassFunction,
signInWithEmailFunction,
signOutFunction,
sendPasswordResetEmailFunction ,
updateProfileFunction,
loading,
setLoading
};

useEffect(() =>{
const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
console.log(currentUser);
setUser(currentUser)
setLoading(false)
});
return () => {
    unsubscribe();
};
},[]);


    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;