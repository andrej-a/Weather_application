import styled from 'styled-components';

import size from '@/constants/size';

const { laptop, tablet } = size;
export const Wrapper = styled.div`
    width: 100%;
    height: 30%;
    backdrop-filter: blur(7.5px);
    background: rgba(217, 217, 217, 0.2);

    @media (max-width: ${laptop}px) {
        height: 50%;
    }
    @media (max-width: ${tablet}px) {
        height: 45%;
    }
`;
