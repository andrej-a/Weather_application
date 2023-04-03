import styled from 'styled-components';

import size from '@/types/size';

const { tablet, laptop, mobileL } = size;

export const SearchWrapper = styled.div`
    width: ${({ theme: { width } }) => width.xxxs}%;
    height: ${({ theme: { height } }) => height.l}%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${({ theme: { margin } }) => margin.l}px;

    @media (max-width: ${tablet}px) {
        width: ${({ theme: { width } }) => width.l}%;
        height: ${({ theme: { height } }) => height.sl}%;
    }
`;

export const Form = styled.form`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.xl}px;

    @media (max-width: ${laptop}px) {
        gap: ${({ theme: { gap } }) => gap.l}px;
    }

    @media (max-width: ${tablet}px) {
        flex-direction: row;
    }
`;

export const Input = styled.input`
    width: ${({ theme: { width } }) => width.xxxl}px;
    height: ${({ theme: { height } }) => height.sssx}px;

    padding: ${({ theme: { padding } }) => padding.buttonLaptop};

    border: ${({ theme: { border } }) => border.none};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.s}px;
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
`;

export const SearchIconWrapper = styled.div`
    position: absolute;
    top: ${({ theme: { top } }) => top.s};
    right: ${({ theme: { right } }) => right.s};

    width: ${({ theme: { width } }) => width.xxs}%;
    height: ${({ theme: { height } }) => height.l}%;
    display: flex;
    justify-content: center;
    align-items: center;

    border-left: ${({ theme: { border } }) => border.s}px solid
        ${({ theme: { colors } }) => colors.black};

    @media (max-width: ${mobileL}px) {
        width: ${({ theme: { width } }) => width.xxs}%;
    }
`;

export const SearchIconImage = styled.img`
    width: ${({ theme: { width } }) => width.xxl}%;
    height: ${({ theme: { height } }) => height.s}%;
`;

export const SubmitButton = styled.button`
    width: ${({ theme: { width } }) => width.lx}px;
    height: ${({ theme: { height } }) => height.s3x}px;

    border-radius: ${({ theme: { borderRadius } }) => borderRadius.l}px;
    border: ${({ theme: { border } }) => border.none};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    background: ${({ theme: { colors } }) => colors.black};
    color: ${({ theme: { colors } }) => colors.white};
    cursor: pointer;

    &:hover {
        background: ${({ theme: { colors } }) => colors.white};
        color: ${({ theme: { colors } }) => colors.black};

        &:disabled {
            cursor: not-allowed;
            background: ${({ theme: { colors } }) => colors.grey};
            color: ${({ theme: { colors } }) => colors.white};
        }
    }

    &:disabled {
        cursor: not-allowed;
        background: ${({ theme: { colors } }) => colors.grey};
        color: ${({ theme: { colors } }) => colors.white};
    }

    @media (max-width: ${laptop}px) {
        width: ${({ theme: { width } }) => width.lx}px;
        height: ${({ theme: { height } }) => height.sx}px;
        font-size: ${({ theme: { fontSize } }) => fontSize.s}px;
    }

    @media (max-width: ${mobileL}px) {
        width: ${({ theme: { width } }) => width.xl}px;
        height: auto;
        font-size: ${({ theme: { fontSize } }) => fontSize.s}px;
        padding: ${({ theme: { padding } }) => padding.buttonLaptop};
    }
`;

export const ElasticContainer = styled.div`
    position: absolute;
    z-index: ${({ theme: { zIndex } }) => zIndex.l};
    top: ${({ theme: { top } }) => top.l}px;

    width: ${({ theme: { width } }) => width.xxxl}px;
    height: auto;
    max-height: ${({ theme: { height } }) => height.xl}px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: ${({ theme: { padding } }) => padding.xxxs}px
        ${({ theme: { padding } }) => padding.none};

    background: ${({ theme: { colors } }) => colors.white};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.s}px;

    @media (max-width: ${laptop}px) {
        width: ${({ theme: { width } }) => width.x2l}px;
    }
    @media (max-width: ${mobileL}px) {
        width: ${({ theme: { width } }) => width.x1l}px;
    }
`;
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
