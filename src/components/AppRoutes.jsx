import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Admin from '../pages/Admin';
import Waiter from '../pages/Waiter';
import ProtectedRoute from '../hoc/ProtectedRoute';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="admin/login" element={<Login />} />
            <Route path="waiter/login" element={<Login />} />
            <Route
                path="admin"
                element={
                    <ProtectedRoute path={'admin'}>
                        <Admin />
                    </ProtectedRoute>
                }
            />
            <Route
                path="waiter"
                element={
                    <ProtectedRoute path={'waiter'}>
                        <Waiter />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};

export default AppRoutes;
