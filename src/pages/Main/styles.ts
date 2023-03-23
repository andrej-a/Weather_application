import styled from 'styled-components';

export const Wrapper = styled.div<{ params: string }>`
    width: 100vw;
    max-width: 1920px;
    height: 100vh;
    max-height: 1080px;
    display: flex;
    justify-content: center;
    align-items: center;

    background: url(${({ params }) => params});
    background-size: cover;
`;
