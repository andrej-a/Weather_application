import styled from 'styled-components';

import size from '@/types/size';

const { laptop, tablet, mobileM } = size;
export const CalendarWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: ${laptop}px) {
        height: 80%;
        flex-direction: row-reverse;
    }
`;

export const LogInButtonWrapper = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    padding: 5px;
    padding-left: 80px;

    @media (max-width: ${laptop}px) {
        width: 30%;
        height: 100%;
        padding: 0;
        justify-content: center;
    }

    @media (max-width: ${tablet}px) {
        width: 60px;
    }
`;

export const LogInButton = styled.button`
    width: auto;
    height: auto;
    padding: 5px 40px;

    border: 0;
    border-radius: 10px;
    font-size: 25px;
    cursor: pointer;
    background: #000;
    color: #fff;

    &:hover {
        background: #fff;
        color: #000;
    }

    @media (max-width: ${laptop}px) {
        padding-left: 3px 15px;
        font-size: 20px;
    }

    @media (max-width: ${tablet}px) {
        width: 50px;
        height: auto;
        padding: 2px 0;
        font-size: 15px;
        border-radius: 0;
    }
`;

export const CalendarInfoWrapper = styled.div`
    width: 100%;
    height: 80%;
    padding-left: 80px;
    display: flex;
    align-items: center;

    font-size: 3vw;
    line-height: 31px;
    color: #fff;

    @media (max-width: ${laptop}px) {
        height: 100%;
        padding-left: 0;
    }
`;

export const CalendarInfo = styled.div`
    width: 90%;
    height: auto;
    max-height: 90%;
    overflow-x: auto;
    overflow-y: auto;

    @media (max-width: ${laptop}px) {
        max-height: none;
        width: 100%;
        height: 100%;
    }
`;

export const CalendarItem = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    padding-left: 20px;

    cursor: pointer;

    &:hover {
        background: #fff;
    }
`;

export const ItemTime = styled.div`
    width: 50px;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #122e65;
    border-radius: 20px;
    font-size: 16px;

    @media (max-width: ${mobileM}px) {
        font-size: 13px;
    }
`;

export const ItemContent = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 26px;

    font-size: 16px;
    color: #000;

    @media (max-width: ${mobileM}px) {
        font-size: 13px;
    }
`;
