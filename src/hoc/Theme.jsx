import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
        values: {
            sm: 480,
            md: 768,
            lg: 992,
        },
    },
});

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
