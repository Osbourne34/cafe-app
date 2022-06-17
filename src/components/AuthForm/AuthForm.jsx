import React, { useState } from 'react';

import { Box, Button, TextField } from '@mui/material';

const AuthForm = ({ handleSubmit }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(name, password);
    };

    return (
        <Box onSubmit={submit} component="form">
            <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                sx={{ mb: 4 }}
                label="Name"
                variant="outlined"
            />
            <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                sx={{ mb: 4 }}
                label="Password"
                variant="outlined"
            />
            <Button fullWidth variant="contained" size="large" type="sumibt">
                Войти
            </Button>
        </Box>
    );
};

export default AuthForm;
