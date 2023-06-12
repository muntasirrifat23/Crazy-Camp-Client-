import React, { useContext } from 'react';
import { AuthContest } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContest);
    const location = useLocation();
    if (loading) {
        return (
            <progress className="progress w-56"></progress>
        );
    }
    if (user) {
        return children;
    }
    return (
        <div>
               return (
       <Navigate state={{from:location}} to='/login' replace></Navigate>
    );
        </div>
    );
};

export default PrivateRoute;