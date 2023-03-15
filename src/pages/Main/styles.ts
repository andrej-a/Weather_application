import styled from 'styled-components';

import BackgroundImage from '@/assets/images/sunny_weather.jpg';

export const Wrapper = styled.div`
    width: 100vw;
    max-width: 1920px;
    height: 100vh;
    max-height: 1080px;

    background: url(${BackgroundImage});
    background-size: cover;
`;
