import styled from 'styled-components';

export const ElasticItem = styled.div`
    position: relative;
    z-index: ${({ theme: { zIndex } }) => zIndex.l};

    width: ${({ theme: { width } }) => width.l}%;
    height: auto;
    display: flex;
    align-items: center;
    padding-left: ${({ theme: { padding } }) => padding.xxxs}px;

    font-size: ${({ theme: { fontSize } }) => fontSize.s}px;
    border-bottom: ${({ theme: { border } }) => border.s}px solid
        ${({ theme: { colors } }) => colors.black};
    cursor: pointer;
    background: ${({ theme: { colors } }) => colors.white};
    color: ${({ theme: { colors } }) => colors.black};

    &:hover {
        background: ${({ theme: { colors } }) => colors.black};
        color: ${({ theme: { colors } }) => colors.white};
    }
`;
