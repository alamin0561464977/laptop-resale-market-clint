import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../ContextAPI/UserContext';
import Loading from '../pages/Share/Loading/Loading';

const AdminRouter = ({ children }) => {
    const { user, loading, isAdmin, isLoading, logOut } = useContext(AuthContext);
    const location = useLocation();
    if (loading || isLoading) {
        return <Loading></Loading>
    }
    if (user?.uid && isAdmin) {
        return children;
    }
    else {
        logOut();
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default AdminRouter;