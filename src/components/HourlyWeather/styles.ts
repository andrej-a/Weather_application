import styled from 'styled-components';

import { DailyWeatherCard, Date } from '@/components/DailyWeather/styles';
import size from '@/types/size';

const { laptop, tablet } = size;

export const HourlyWeatherWrapper = styled.div`
    position: relative;

    width: ${({ theme: { width } }) => width.l}%;
    height: ${({ theme: { height } }) => height.l}%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    overflow: auto;
`;

export const HourlyWeatherCard = styled(DailyWeatherCard)`
    width: ${({ theme: { width } }) => width.x5s}%;

    img {
        width: ${({ theme: { width } }) => width.s}px;
        height: ${({ theme: { height } }) => height.s}px;
    }

    @media (max-width: ${laptop}px) {
        width: ${({ theme: { width } }) => width.xxxs}%;
        height: ${({ theme: { height } }) => height.x}%;
        flex-direction: row;
    }

    @media (max-width: ${tablet}px) {
        flex-direction: column;
        height: ${({ theme: { height } }) => height.sl}%;
    }
`;

export const Time = styled(Date)``;
