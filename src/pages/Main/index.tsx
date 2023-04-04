import React from 'react';
import { ClockLoader } from 'react-spinners';

import UserInterface from '@/components/UserInterface';
import useImage from '@/hooks/useImage';
import { useAppSelector } from '@/hooks/useStore';
import constants from '@/types/constants';

import * as imports from './imports';
import { Wrapper } from './styles';

const { mainSelector } = imports;

const Main = () => {
    const { SPINNER_COLOR } = constants;
    const { isImageReady, weatherCode } = useAppSelector(mainSelector);
    useImage();
    return (
        <>
            {isImageReady && weatherCode ? (
                <Wrapper params={`/images/${weatherCode}.jpg`}>
                    <UserInterface />
                </Wrapper>
            ) : (
                <ClockLoader color={SPINNER_COLOR} />
            )}
        </>
    );
};

export default Main;
