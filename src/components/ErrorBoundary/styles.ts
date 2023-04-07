import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;

    width: ${({ theme: { width } }) => width.l}vw;
    height: ${({ theme: { height } }) => height.l}vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    pointer-events: none;
`;
export const ErrorDescription = styled.p`
    max-width: ${({ theme: { width } }) => width.m}%;

    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
`;
export default Wrapper;
