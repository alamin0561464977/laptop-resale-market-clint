import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../ContextAPI/UserContext';
import Loading from '../pages/Share/Loading/Loading';

const PrivetRouter = ({ children }) => {
    const { user, loading, logOut } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (user?.uid) {
        return children;
    }
    else {
        // logOut();
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default PrivetRouter;