import React from 'react';

import Header from '@/components/Header';
import MainContainer from '@/components/MainContainer';
import WeatherContainer from '@/components/WeatherContainer';

import { InterfaceWrapper } from './styles';

const UserInterface = React.memo(() => {
    return (
        <InterfaceWrapper>
            <Header />
            <MainContainer />
            <WeatherContainer />
        </InterfaceWrapper>
    );
});

export default UserInterface;
