import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../ContextAPI/UserContext';
import Loading from '../pages/Share/Loading/Loading';

const SellerRouter = ({ children }) => {
    const { user, loading, isSeller, logOut, isSellerLoading } = useContext(AuthContext);
    const location = useLocation();
    if (loading || isSellerLoading) {
        return <Loading></Loading>
    }
    if (user?.uid && isSeller) {
        return children;
    }
    else {
        // logOut();
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default SellerRouter;