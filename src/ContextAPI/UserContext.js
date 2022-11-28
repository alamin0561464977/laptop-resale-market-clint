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

    const { data: isSeller, isLoading: isSellerLoading } = useQuery({
        queryKey: ['is-seller', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://laptop-resale-market-server-alamin0561464977.vercel.app/is-seller?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('userToken')}`
                }
            });
            const data = await res.json();
            return data;
        },
    });
    const { data: seller, isLoading: sellerLoading } = useQuery({
        queryKey: ['seller', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://laptop-resale-market-server-alamin0561464977.vercel.app/seller?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('userToken')}`
                }
            });
            const data = await res.json();
            return data;
        },
    });
    const { data: isAdmin, isLoading } = useQuery({
        queryKey: ['is-admin', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://laptop-resale-market-server-alamin0561464977.vercel.app/is-admin?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    const userInfo = {
        user,
        loading,
        isSeller,
        isSellerLoading,
        isLoading,
        isAdmin,
        sellerLoading,
        seller,
        signUp,
        login,
        googleSingIn,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;