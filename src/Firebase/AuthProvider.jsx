 import React, { createContext, useEffect, useState } from 'react';
 import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from './firebase.config';
 


 export const themeContext = createContext(null)


 const AuthProvider = ({children}) => {
    const [loader,setLoader] = useState(false)
    const [user,setUser] = useState(null)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const googleSign = () => {
        setLoader(true)
        return signInWithPopup(auth,googleProvider)
    }
    const createUser = (email,password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUser = (name,photo) => {
       return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }


    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
       const unsubscribe =  onAuthStateChanged(auth, (loggedUser) => {
            if(loggedUser){
                setLoader(false)
                setUser(loggedUser)
            }
        })
        return () => {
            unsubscribe();
        }
    },[])



    const useInfo = {
        user,
        createUser,
        logOut,
        loader,
        googleSign,
        updateUser,
        setLoader,
        signInUser,

    }



   return (
     <themeContext.Provider value={useInfo}>
        {
            children
        }
     </themeContext.Provider>
   )
 }
 
 export default AuthProvider