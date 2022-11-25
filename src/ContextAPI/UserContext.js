import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth } from '../Firebase/firebase.init';
import { useQuery, } from '@tanstack/react-query';


export const AuthContext = createContext();
const UserContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();


    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const googleSingIn = () => {
        return signInWithPopup(auth, googleProvider);
    };
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unS = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(null)
        });
        return () => unS();
    }, []);

    const { data: isSeller, isLoading } = useQuery({
        queryKey: ['is-seller', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/is-seller?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    const userInfo = {
        user,
        loading,
        isSeller,
        isLoading,
        signUp,
        login,
        googleSingIn,
        logOut
    }
    console.log(user)
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;