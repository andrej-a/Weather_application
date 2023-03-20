import styled from 'styled-components';

import size from '@/constants/size';

const { tablet, laptop, mobileL } = size;
export const SearchWrapper = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;

    @media (max-width: ${tablet}px) {
        width: 100%;
        height: 50%;
    }
`;

export const Form = styled.form`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    @media (max-width: ${tablet}px) {
        flex-direction: row;
    }

    @media (max-width: ${mobileL}px) {
        gap: 10px;
    }
`;

export const Input = styled.input`
    width: 250px;
    height: 40px;

    padding: 3px 14px;

    border: 0;
    border-radius: 5px;
    font-size: 25px;
    line-height: 31px;

    @media (max-width: ${laptop}px) {
        width: 200px;
    }
    @media (max-width: ${mobileL}px) {
        width: 170px;
    }
`;
export const SubmitButton = styled.button`
    width: 140px;
    height: 45px;

    border-radius: 10px;
    border: 0;
    font-size: 25px;
    background: #000;
    color: #fff;
    cursor: pointer;

    &:hover {
        background: #fff;
        color: #000;

        &:disabled {
            cursor: not-allowed;
            background: grey;
            color: #fff;
        }
    }

    &:disabled {
        cursor: not-allowed;
        background: grey;
        color: #fff;
    }

    @media (max-width: ${mobileL}px) {
        width: 95px;
        height: auto;
        font-size: 20px;
        padding: 7px 14px;
    }
`;

export const ElasticContainer = styled.div`
    position: absolute;
    z-index: 3;
    top: 45px;

    width: 250px;
    height: auto;
    max-height: 150px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 0;

    background: #fff;
    border-radius: 5px;

    @media (max-width: ${laptop}px) {
        width: 200px;
    }
    @media (max-width: ${mobileL}px) {
        width: 170px;
    }
`;
export const ElasticItem = styled.div`
    position: relative;
    z-index: 3;

    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    padding-left: 5px;

    font-size: 20px;
    border-bottom: 1px solid black;
    cursor: pointer;
    background: #fff;
    color: #000;

    &:hover {
        background: #000;
        color: #fff;
    }
`;

export const CloseElasticContainer = styled.button`
    position: absolute;
    right: 10px;

    z-index: 4;
    width: auto;
    height: auto;
    padding: 2px;

    border: 0;
    background: red;
    color: #fff;
    cursor: pointer;

    &:hover {
        background: #fff;
        color: red;
    }
`;
