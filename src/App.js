import React from 'react';

import './app.css';

import AppRoutes from './components/AppRoutes';
import Theme from './hoc/Theme';

const App = () => {
    return (
        <Theme>
            <AppRoutes />
        </Theme>
    );
};

export default App;
