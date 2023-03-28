import styled from 'styled-components';

import size from '@/types/size';

const { tablet } = size;
export const HeaderWrapper = styled.div`
    width: 100%;
    height: 20%;

    transition: all 0.3s ease;
    display: flex;

    @media (max-width: ${tablet}px) {
        height: 25%;
        flex-direction: column;
    }
`;
