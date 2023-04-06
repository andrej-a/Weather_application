import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import GlobalStyle from '@/globalStyles';
import useNavigator from '@/hooks/useNavigator';
import Main from '@/pages/Main';

import { ApplicationWrapper } from './styles';

const App = () => {
    const { getPositionCallback, defaultUserSettings } = useNavigator();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(getPositionCallback, error => {
            if (error.PERMISSION_DENIED) {
                defaultUserSettings();
            }
        });
    }, []);

    return (
        <ApplicationWrapper>
            <Main />
            <GlobalStyle />
            <Toaster />
        </ApplicationWrapper>
    );
};

export default App;
