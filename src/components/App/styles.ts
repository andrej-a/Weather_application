import styled from 'styled-components';

export const ApplicationWrapper = styled.div`
    width: ${({ theme: { width } }) => width.l}vw;
    height: ${({ theme: { height } }) => height.l}vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
