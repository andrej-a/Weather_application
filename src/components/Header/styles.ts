import styled from 'styled-components';

import size from '@/types/size';

const { tablet } = size;
export const HeaderWrapper = styled.div`
    width: ${({ theme: { width } }) => width.l}%;
    height: ${({ theme: { height } }) => height.xxs}%;

    transition: all 0.3s ease;
    display: flex;

    @media (max-width: ${tablet}px) {
        height: ${({ theme: { height } }) => height.xs}%;
        flex-direction: column;
    }
`;
