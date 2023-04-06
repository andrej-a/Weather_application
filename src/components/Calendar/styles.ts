import styled from 'styled-components';

import size from '@/types/size';

const { laptop, tablet } = size;
export const CalendarWrapper = styled.div`
    width: ${({ theme: { width } }) => width.l}%;
    height: ${({ theme: { height } }) => height.l}%;
    display: flex;
    flex-direction: column;

    @media (max-width: ${laptop}px) {
        height: ${({ theme: { height } }) => height.s}%;
        flex-direction: row-reverse;
    }
`;

export const LogInButtonWrapper = styled.div`
    width: ${({ theme: { width } }) => width.l}%;
    height: ${({ theme: { height } }) => height.xxs}%;
    display: flex;
    align-items: center;
    padding: ${({ theme: { padding } }) => padding.xxxs}px;
    padding-left: ${({ theme: { padding } }) => padding.s}px;

    @media (max-width: ${laptop}px) {
        width: ${({ theme: { width } }) => width.xxxs}%;
        height: ${({ theme: { height } }) => height.l}%;
        padding: ${({ theme: { padding } }) => padding.none};
        justify-content: center;
    }

    @media (max-width: ${tablet}px) {
        width: ${({ theme: { width } }) => width.s}px;
    }
`;

export const LogInButton = styled.button`
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
        padding-left: ${({ theme: { padding } }) => padding.buttonLaptop};
        font-size: ${({ theme: { fontSize } }) => fontSize.s}px;
    }

    @media (max-width: ${tablet}px) {
        width: ${({ theme: { width } }) => width.xs}px;
        height: auto;
        padding: ${({ theme: { padding } }) => padding.buttonTablet};
        font-size: ${({ theme: { fontSize } }) => fontSize.xs}px;
        border-radius: ${({ theme: { borderRadius } }) => borderRadius.none};
    }
`;

export const CalendarInfoWrapper = styled.div`
    width: ${({ theme: { width } }) => width.l}%;
    height: ${({ theme: { height } }) => height.s}%;
    padding-left: ${({ theme: { padding } }) => padding.s}px;
    display: flex;
    align-items: center;

    font-size: ${({ theme: { fontSize } }) => fontSize.xxxs}vw;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    color: ${({ theme: { colors } }) => colors.white};

    @media (max-width: ${laptop}px) {
        height: ${({ theme: { height } }) => height.l}%;
        padding-left: ${({ theme: { padding } }) => padding.none};
    }
`;

export const CalendarInfo = styled.div`
    width: ${({ theme: { width } }) => width.xl}%;
    height: auto;
    min-height: ${({ theme: { height } }) => height.xs}%;
    max-height: ${({ theme: { height } }) => height.m}%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: ${({ theme: { padding } }) => padding.xxs}px;

    overflow-x: auto;
    overflow-y: auto;

    font-size: ${({ theme: { fontSize } }) => fontSize.s}px;
    text-align: center;

    @media (max-width: ${laptop}px) {
        max-height: none;
        width: ${({ theme: { width } }) => width.l}%;
        height: ${({ theme: { height } }) => height.l}%;
    }
`;
