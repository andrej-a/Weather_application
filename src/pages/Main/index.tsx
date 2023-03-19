import React from 'react';

import UserInterface from '@/components/UserInterface';

import { Wrapper } from './styles';

const Main = () => {
    return (
        <React.Fragment>
            <Wrapper>
                <UserInterface />
            </Wrapper>
        </React.Fragment>
    );
};

export default Main;
