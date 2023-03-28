import styled from 'styled-components';

import size from '@/types/size';

const { laptop } = size;
export const MainContainerWrapper = styled.div`
    width: 100%;
    height: 50%;
    display: flex;

    @media (max-width: ${laptop}px) {
        flex-direction: column;
        height: 30%;
    }
`;
