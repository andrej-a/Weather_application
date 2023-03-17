import React from 'react';

import WeatherSwitcher from '@/components/WeatherSwitcher';

import Calendar from '../Calendar';
import { MainContainerWrapper } from './styles';

const MainContainer = () => {
    return (
        <MainContainerWrapper>
            <Calendar />
            <WeatherSwitcher />
        </MainContainerWrapper>
    );
};

export default MainContainer;
