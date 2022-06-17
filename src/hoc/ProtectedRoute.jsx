import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, path }) => {
    const { user, token } = useSelector((state) => state.auth);

    return user && token ? (
        children
    ) : (
        <Navigate to={`/${path}/login`} replace />
    );
};

export default ProtectedRoute;
