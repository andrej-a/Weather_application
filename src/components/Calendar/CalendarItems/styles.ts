import styled from 'styled-components';

import size from '@/types/size';

const { laptop, tablet, mobileM } = size;

export const CalendarItem = styled.div`
    width: ${({ theme: { width } }) => width.l}%;
    height: ${({ theme: { height } }) => height.sx}px;
    display: flex;
    align-items: center;
    padding-left: ${({ theme: { padding } }) => padding.xs}px;

    cursor: pointer;

    &:hover {
        background: ${({ theme: { colors } }) => colors.white};
    }
`;

export const ItemTime = styled.div`
    width: auto;
    min-width: ${({ theme: { width } }) => width.m}px;
    height: ${({ theme: { height } }) => height.s}%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ theme: { padding } }) => padding.xxxs}px;
    background: ${({ theme: { colors } }) => colors.darkBlue};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.xl}px;
    font-size: ${({ theme: { fontSize } }) => fontSize.xs}px;
`;

export const ItemContent = styled.div`
    width: ${({ theme: { width } }) => width.xl}%;
    height: ${({ theme: { height } }) => height.l}%;
    display: flex;
    align-items: center;
    padding-left: ${({ theme: { padding } }) => padding.xs}px;

    font-size: ${({ theme: { fontSize } }) => fontSize.xs}px;
    color: ${({ theme: { colors } }) => colors.black};
`;
