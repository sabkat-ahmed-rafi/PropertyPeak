import React, { createContext, useEffect, useState } from 'react';
import auth from "./Firebase.init";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from 'firebase/auth';


export const AuthContext = createContext(null)


const Authentication = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create User 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Login existing User 
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Logout existing User
    const logOut = () => {
        return signOut(auth)
    }
    // Login with GitHub
    const loginWithGithub = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // get Currently user loged in 
    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                console.log(currentUser)
                setUser(currentUser)
                setLoading(false)
            } else {
                setUser(currentUser) 
                setLoading(false)
            }
        })
        return () => {
            unSubscribe()
        }
    },[])

     // sending info through context 
     const userInfo = {createUser, loginUser, logOut, loginWithGithub, user, loading}

    return (
        <>
          <AuthContext.Provider value={userInfo}>
            {children}
          </AuthContext.Provider>
        </>
    );
};

export default Authentication;