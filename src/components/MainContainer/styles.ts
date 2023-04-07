import styled from 'styled-components';

import size from '@/types/size';

const { laptop } = size;
export const MainContainerWrapper = styled.div`
    width: ${({ theme: { width } }) => width.l}%;
    height: ${({ theme: { height } }) => height.sl}%;
    display: flex;

    @media (max-width: ${laptop}px) {
        flex-direction: column;
        height: ${({ theme: { height } }) => height.sx}%;
    }
`;
