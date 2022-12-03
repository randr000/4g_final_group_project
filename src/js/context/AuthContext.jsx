import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase-config.js';
import { db } from '../firebase-config.js';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

const UserContext = createContext(null);

export const AuthContextProvider = ({children}) => {
    
    const [user, setUser] = useState();
    
    const createUser = async (username, email, password) => {

        if ((await getDoc(doc(db, 'usernames', username))).exists()) throw new Error('Username already exists!');

        const newUser = createUserWithEmailAndPassword(auth, email, password);
        const res = await newUser;
        
        return await setDoc(doc(db, 'usernames', username), {
            uid: res.user.uid
        });
        
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            // console.log(`new: ${currentUser.uid}`)
        });

        return () => {
            unsubscribe();
        };

    }, []);

    return (
        <UserContext.Provider value={{createUser, user, logout, signIn}}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext);
};