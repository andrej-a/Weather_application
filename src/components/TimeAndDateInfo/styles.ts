import styled from 'styled-components';

import size from '@/types/size';

const { tablet, mobileL } = size;
export const TimeAndDateInfoWrapper = styled.div`
    width: ${({ theme: { width } }) => width.m}%;
    height: ${({ theme: { height } }) => height.l}%;
    display: flex;
    flex-direction: column;

    @media (max-width: ${tablet}px) {
        width: ${({ theme: { width } }) => width.l}%;
        height: ${({ theme: { height } }) => height.sl}%;
    }
`;

export const TimeWrapper = styled.div`
    width: ${({ theme: { width } }) => width.l}%;
    height: ${({ theme: { height } }) => height.sl}%;
    padding-left: ${({ theme: { padding } }) => padding.s}px;
    display: flex;
    align-items: flex-end;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.default};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.l};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxxs}vw;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xl}px;

    color: transparent;
    -webkit-text-stroke: ${({ theme: { stroke } }) => stroke.l}px
        ${({ theme: { colors } }) => colors.black};

    @media (max-width: ${tablet}px) {
        padding-left: ${({ theme: { padding } }) => padding.none};
        justify-content: center;
        font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
        -webkit-text-stroke: ${({ theme: { stroke } }) => stroke.s}px
            ${({ theme: { colors } }) => colors.black};
    }
    @media (max-width: ${mobileL}px) {
        padding-left: ${({ theme: { padding } }) => padding.none};
        justify-content: center;
        font-size: ${({ theme: { fontSize } }) => fontSize.s}px;
    }
`;

export const DateWrapper = styled(TimeWrapper)`
    align-items: flex-start;
`;
