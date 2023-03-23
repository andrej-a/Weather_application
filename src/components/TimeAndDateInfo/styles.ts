import styled from 'styled-components';

import size from '@/constants/size';

const { tablet, mobileL } = size;
export const TimeAndDateInfoWrapper = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: ${tablet}px) {
        width: 100%;
        height: 50%;
    }
`;

export const TimeWrapper = styled.div`
    width: 100%;
    height: 50%;
    padding-left: 80px;
    display: flex;
    align-items: flex-end;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 3vw;
    line-height: 50px;

    color: transparent;
    -webkit-text-stroke: 1.5px black;

    @media (max-width: ${tablet}px) {
        padding-left: 0;
        justify-content: center;
        font-size: 30px;
        -webkit-text-stroke: 1px black;
    }
    @media (max-width: ${mobileL}px) {
        padding-left: 0;
        justify-content: center;
        font-size: 23px;
    }
`;

export const DateWrapper = styled(TimeWrapper)`
    align-items: flex-start;
`;
