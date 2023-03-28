import styled from 'styled-components';

import size from '@/types/size';

const { laptop, mobileL } = size;
export const SwitchWrapper = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 35px;
    padding: 5px;
    padding-bottom: 5px;

    @media (max-width: ${laptop}px) {
        width: 100%;
        height: 15%;
        align-items: center;
    }
`;

export const DailyWeatherButton = styled.button`
    width: auto;
    height: auto;
    padding: 5px 40px;

    border: 0;
    border-radius: 10px;
    font-size: 25px;
    cursor: pointer;
    background: #000;
    color: #fff;

    &:hover {
        background: #fff;
        color: #000;
    }

    @media (max-width: ${laptop}px) {
        padding: 3px 40px;
        font-size: 20px;
    }

    @media (max-width: ${mobileL}px) {
        padding: 3px 14px;
    }
`;
export const HourlyWeatherButton = styled(DailyWeatherButton)``;
