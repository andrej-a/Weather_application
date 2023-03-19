import React from 'react';

import GlobalStyle from '@/globalStyles';
import Main from '@/pages/Main';

import { ApplicationWrapper } from './styles';

const App = () => {
    return (
        <ApplicationWrapper>
            <Main />
            <GlobalStyle />
        </ApplicationWrapper>
    );
};

export default App;
