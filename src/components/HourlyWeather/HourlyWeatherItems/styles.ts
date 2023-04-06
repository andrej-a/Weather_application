import styled from 'styled-components';

import {
    DailyWeatherCard,
    Date,
} from '@/components/DailyWeather/DailyWeatherItems/styles';
import size from '@/types/size';

const { laptop, tablet } = size;

export const HourlyWeatherCard = styled(DailyWeatherCard)<{ params: boolean }>`
    width: ${({ theme: { width } }) => width.x2s}%;
    background: ${({ params, theme: { colors } }) =>
        params ? colors.whiteTransparentMiddle : ''};

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

export const HourlyWeatherIcon = styled.img`
    width: ${({ theme: { width } }) => width.xxl}px;
    height: ${({ theme: { height } }) => height.s}px;
`;
