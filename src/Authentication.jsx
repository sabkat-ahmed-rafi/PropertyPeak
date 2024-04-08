import React, { createContext, useEffect, useState } from 'react';
import auth from "./Firebase.init";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

export const AuthContext = createContext(null)

const Authentication = ({children}) => {

    const [user, setUser] = useState(null)

    // create User 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Login existing User 
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Logout existing User
    const logOut = () => {
        return signOut(auth)
    }
    // Login with GitHub
    const loginWithGithub = (provider) => {
        return signInWithPopup(auth, provider)
    }

    // sending info through context 
    const userInfo = {createUser, loginUser, logOut, loginWithGithub, user}

    // get Currently user loged in 
    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                console.log(currentUser)
                setUser(currentUser)
            } else {
                setUser(currentUser) 
            }
        })
        return () => {
            unSubscribe()
        }
    },[])

    return (
        <>
          <AuthContext.Provider value={userInfo}>
            {children}
          </AuthContext.Provider>
        </>
    );
};

export default Authentication;