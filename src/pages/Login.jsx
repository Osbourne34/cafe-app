import React from 'react';

import { useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { fetchAdminLogin } from './../store/auth/authSlice';

import { Container, Box, Typography } from '@mui/material';

import AuthForm from '../components/AuthForm/AuthForm';
import Loader from '../components/Loader';

function Login() {
    const dispatch = useDispatch();
    const { error, loading } = useSelector((state) => state.auth);

    const { pathname } = useLocation();
    const isAdmin = pathname.includes('admin');

    const handleSubmit = (name, password) => {
        if (name.trim().length && password.trim().length) {
            dispatch(fetchAdminLogin({ name, password }));
        }
    };

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Container maxWidth='sm'>
                <Typography variant='h4' textAlign='center' mb={4}>
                    {isAdmin ? 'Войти как Админ' : 'Войти как Официант'}
                </Typography>
                <AuthForm handleSubmit={handleSubmit} />
                <Loader loading={loading} />
            </Container>
        </Box>
    );
}

export default Login;
