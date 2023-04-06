import styled from 'styled-components';

import size from '@/types/size';

const { tablet } = size;

export const DailyWeatherWrapper = styled.div`
    width: ${({ theme: { width } }) => width.l}%;
    height: ${({ theme: { height } }) => height.l}%;

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    overflow: hidden;

    @media (max-width: ${tablet}px) {
        overflow: auto;
    }
`;
