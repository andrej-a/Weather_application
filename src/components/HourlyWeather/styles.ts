import styled from 'styled-components';

export const HourlyWeatherWrapper = styled.div`
    position: relative;

    width: ${({ theme: { width } }) => width.l}%;
    height: ${({ theme: { height } }) => height.l}%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    overflow: auto;
`;
