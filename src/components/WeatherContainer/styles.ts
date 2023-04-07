import styled from 'styled-components';

import size from '@/types/size';

const { laptop, tablet } = size;
export const Wrapper = styled.div`
    width: ${({ theme: { width } }) => width.l}%;
    height: ${({ theme: { height } }) => height.sx}%;
    backdrop-filter: blur(7.5px);
    background: ${({ theme: { colors } }) => colors.whiteTransparent};
    padding: ${({ theme: { padding } }) => padding.xxxs}px;

    @media (max-width: ${laptop}px) {
        height: ${({ theme: { height } }) => height.sl}%;
    }
    @media (max-width: ${tablet}px) {
        height: ${({ theme: { height } }) => height.s3x}%;
    }
`;
