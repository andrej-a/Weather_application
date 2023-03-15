import styled from 'styled-components';

import size from '@/constants/size';

const { tablet } = size;
export const SearchWrapper = styled.div`
    width: 30%;
    height: 100%;

    @media (max-width: ${tablet}px) {
        width: 100%;
        height: 50%;
    }
`;
