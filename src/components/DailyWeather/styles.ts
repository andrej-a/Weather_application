import styled from 'styled-components';

import size from '@/constants/size';

const { laptop, tablet, mobileL } = size;
export const DailyWeatherWrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    overflow: hidden;
`;

export const DailyWeatherCard = styled.div`
    width: 14%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    overflow: hidden;

    svg {
        fill: #fff;
        width: 90px;
        height: 90px;

        @media (max-width: ${laptop}px) {
            width: 80px;
            height: 80px;
            flex-direction: row;
            justify-content: space-between;
        }

        @media (max-width: ${tablet}px) {
            width: 40px;
            height: 40px;
            padding-top: 10px;
        }
    }

    @media (max-width: ${laptop}px) {
        width: 30%;
        height: 30%;
        flex-direction: row;
    }

    @media (max-width: ${tablet}px) {
        flex-direction: column;
    }
`;

export const WeatherDataWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 5px;
    @media (max-width: ${laptop}px) {
        width: 70%;
        height: 100%;
    }

    @media (max-width: ${tablet}px) {
        width: 100%;
        height: auto;
        gap: 0;
    }
`;

export const Date = styled.div`
    color: #000;
    font-size: 20px;
    font-weight: 400;
    @media (max-width: ${mobileL}px) {
        font-size: 15px;
    }
`;

export const WeatherData = styled(Date)`
    font-weight: 900;
    font-size: 30px;

    @media (max-width: ${mobileL}px) {
        font-size: 25px;
    }
`;
