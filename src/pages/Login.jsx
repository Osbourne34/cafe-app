import React from 'react';

import { useLocation, Navigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin } from './../store/auth/authSlice';

import { Container, Box, Typography, Alert } from '@mui/material';

import AuthForm from '../components/AuthForm/AuthForm';
import Loader from '../components/Loader';

const Login = () => {
    const dispatch = useDispatch();
    const { error, loading, user, token } = useSelector((state) => state.auth);

    const { pathname } = useLocation();
    const isAdmin = pathname.includes('admin');

    const handleSubmit = (name, password) => {
        if (name.trim().length && password.trim().length) {
            dispatch(
                fetchLogin({
                    body: {
                        name,
                        password,
                    },
                    whoLogin: isAdmin ? 'admin' : 'weiter',
                })
            );
        }
    };

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Container maxWidth="sm">
                <Typography variant="h4" textAlign="center" mb={4}>
                    {isAdmin ? 'Войти как Админ' : 'Войти как Официант'}
                </Typography>

                {error && (
                    <Alert variant="filled" severity="error" sx={{ mb: 4 }}>
                        {error}
                    </Alert>
                )}

                {user && token && (
                    <Navigate
                        to={isAdmin ? '/admin' : '/waiter'}
                        replace={true}
                    />
                )}

                <AuthForm handleSubmit={handleSubmit} />
                <Loader loading={loading} />
            </Container>
        </Box>
    );
};

export default Login;
