import styled from 'styled-components';

import size from '@/types/size';

const { tablet } = size;
export const InterfaceWrapper = styled.div`
    width: 80%;
    height: 80%;
    backdrop-filter: blur(7.5px);
    background: rgba(217, 217, 217, 0.2);

    @media (max-width: ${tablet}px) {
        width: 95%;
        height: 95%;
    }

    transition: all 0.3s ease;
`;
