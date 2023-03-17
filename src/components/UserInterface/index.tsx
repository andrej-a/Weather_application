import React from 'react';

import Header from '@/components/Header';

import MainContainer from '../MainContainer';
import { InterfaceWrapper } from './styles';

const UserInterface = () => {
    return (
        <InterfaceWrapper>
            <Header />
            <MainContainer />
        </InterfaceWrapper>
    );
};

export default UserInterface;
