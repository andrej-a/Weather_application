import styled from 'styled-components';

import { DailyWeatherCard, Date } from '@/components/DailyWeather/styles';
import size from '@/constants/size';

const { laptop, tablet } = size;

export const HourlyWeatherWrapper = styled.div`
    position: relative;

    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    overflow: hidden;
`;

export const LeftArrowContainer = styled.div`
    position: absolute;
    z-index: 2;
    left: 0;
    top: 40%;

    width: 80px;
    height: auto;
    display: flex;
    justify-content: flex-start;

    svg {
        fill: #fff;
        width: 100%;
        height: 50px;

        opacity: 0.5;
        cursor: pointer;

        &:hover {
            fill: #000;
            opacity: 1;
        }
    }
`;

export const RightArrowContainer = styled(LeftArrowContainer)`
    left: calc(100% - 80px);
    justify-content: flex-end;
`;

export const HourlyWeatherCard = styled(DailyWeatherCard)`
    width: 12.5%;

    @media (max-width: ${laptop}px) {
        width: 30%;
        height: 30%;
        flex-direction: row;
    }

    @media (max-width: ${tablet}px) {
        flex-direction: column;
    }
`;

export const Time = styled(Date)``;
