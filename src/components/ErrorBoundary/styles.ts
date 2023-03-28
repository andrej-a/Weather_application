import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;

    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    pointer-events: none;
`;
export const ErrorDescription = styled.p`
    max-width: 70%;

    font-size: 24px;
`;
export default Wrapper;
