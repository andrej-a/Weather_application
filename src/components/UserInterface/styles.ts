import styled from 'styled-components';

import size from '@/types/size';

const { tablet } = size;
export const InterfaceWrapper = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    height: ${({ theme: { height } }) => height.s}%;
    backdrop-filter: blur(7.5px);
    background: ${({ theme: { colors } }) => colors.whiteTransparent};

    @media (max-width: ${tablet}px) {
        width: ${({ theme: { width } }) => width.x3l}%;
        height: ${({ theme: { height } }) => height.ml}%;
    }

    transition: all 0.3s ease;
`;
