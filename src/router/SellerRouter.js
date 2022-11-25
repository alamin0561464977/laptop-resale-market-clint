import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../ContextAPI/UserContext';
import Loading from '../pages/Share/Loading/Loading';

const SellerRouter = ({ children }) => {
    const { user, loading, isSeller, isLoading } = useContext(AuthContext);
    const location = useLocation();
    if (loading || isLoading) {
        return <Loading></Loading>
    }
    if (user?.uid && isSeller) {
        return children;
    }
    else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default SellerRouter;