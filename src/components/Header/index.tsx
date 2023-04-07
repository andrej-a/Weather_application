import React from 'react';

import Search from '../Search';
import TimeAndDateInfo from '../TimeAndDateInfo';
import { HeaderWrapper } from './styles';

const Header = () => {
    return (
        <HeaderWrapper>
            <TimeAndDateInfo />
            <Search />
        </HeaderWrapper>
    );
};

export default Header;
