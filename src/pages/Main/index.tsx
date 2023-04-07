import React from 'react';
import { ClockLoader } from 'react-spinners';
import { useTheme } from 'styled-components';

import UserInterface from '@/components/UserInterface';
import { DefaultTheme } from '@/globalStyles';
import useImage from '@/hooks/useImage';
import { useAppSelector } from '@/hooks/useStore';

import * as imports from './imports';
import { Wrapper } from './styles';

const { mainSelector } = imports;

const Main = () => {
    const {
        colors: { black },
    } = useTheme() as DefaultTheme;

    const { isImageReady, weatherCode } = useAppSelector(mainSelector);
    useImage();
    return (
        <>
            {isImageReady && weatherCode ? (
                <Wrapper params={`/images/${weatherCode}.jpg`}>
                    <UserInterface />
                </Wrapper>
            ) : (
                <ClockLoader color={black} />
            )}
        </>
    );
};

export default Main;
