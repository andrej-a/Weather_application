import styled from 'styled-components';

import size from '@/types/size';

const { laptop, tablet, mobileL } = size;

export const DailyWeatherCard = styled.div<{ params: boolean }>`
    width: ${({ theme: { width } }) => width.x4s}%;
    height: ${({ theme: { height } }) => height.l}%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    overflow: hidden;
    background: ${({ params, theme: { colors } }) =>
        params ? colors.whiteTransparentMiddle : ''};

    @media (max-width: ${laptop}px) {
        width: ${({ theme: { width } }) => width.xxxs}%;
        height: ${({ theme: { height } }) => height.sx}%;
        flex-direction: row;
    }

    @media (max-width: ${tablet}px) {
        flex-direction: column;
        height: ${({ theme: { height } }) => height.sssx}%;
    }
`;

export const WeatherDataWrapper = styled.div`
    width: ${({ theme: { width } }) => width.l}%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.l}px;
    padding: ${({ theme: { padding } }) => padding.xxxs}px;

    @media (max-width: ${laptop}px) {
        width: ${({ theme: { width } }) => width.m}%;
        height: ${({ theme: { height } }) => height.l}%;
    }

    @media (max-width: ${tablet}px) {
        width: ${({ theme: { width } }) => width.l}%;
        height: auto;
        gap: ${({ theme: { gap } }) => gap.none};
    }
`;
export const Date = styled.div`
    color: ${({ theme: { colors } }) => colors.black};
    font-size: ${({ theme: { fontSize } }) => fontSize.s}px;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.l};
    @media (max-width: ${mobileL}px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.xs}px;
    }
`;

export const WeatherData = styled(Date)`
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;

    @media (max-width: ${mobileL}px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    }
`;

export const DailyWeatherIcon = styled.img`
    width: ${({ theme: { width } }) => width.xl}px;
    height: ${({ theme: { height } }) => height.s}px;

    @media (max-width: ${laptop}px) {
        width: ${({ theme: { width } }) => width.xxl}px;
    }

    @media (max-width: ${tablet}px) {
        width: ${({ theme: { width } }) => width.s}px;
        height: ${({ theme: { height } }) => height.ssx}px;
        padding-top: ${({ theme: { padding } }) => padding.sx}px;
    }
`;
