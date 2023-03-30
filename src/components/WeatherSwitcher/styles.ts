import styled from 'styled-components';

import size from '@/types/size';

const { laptop, mobileL } = size;
export const SwitchWrapper = styled.div`
    width: ${({ theme: { width } }) => width.xs}%;
    height: ${({ theme: { height } }) => height.l}%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: ${({ theme: { gap } }) => gap.xxl}px;
    padding: ${({ theme: { padding } }) => padding.xxxs}px;
    padding-bottom: ${({ theme: { padding } }) => padding.xxxs}px;

    @media (max-width: ${laptop}px) {
        width: ${({ theme: { width } }) => width.l}%;
        height: ${({ theme: { height } }) => height.x1s}%;
        align-items: center;
    }
`;

export const DailyWeatherButton = styled.button`
    width: auto;
    height: auto;
    padding: ${({ theme: { padding } }) => padding.buttonDefault};

    border: ${({ theme: { border } }) => border.none};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.l}px;
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    cursor: pointer;
    background: ${({ theme: { colors } }) => colors.black};
    color: ${({ theme: { colors } }) => colors.white};

    &:hover {
        background: ${({ theme: { colors } }) => colors.white};
        color: ${({ theme: { colors } }) => colors.black};
    }

    @media (max-width: ${laptop}px) {
        padding: ${({ theme: { padding } }) => padding.buttonDefault};
        font-size: ${({ theme: { fontSize } }) => fontSize.s}px;
    }

    @media (max-width: ${mobileL}px) {
        padding: ${({ theme: { padding } }) => padding.buttonLaptop};
    }
`;
export const HourlyWeatherButton = styled(DailyWeatherButton)``;
