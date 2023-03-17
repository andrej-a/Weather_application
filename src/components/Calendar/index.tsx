import React from 'react';

import {
    CalendarInfo,
    CalendarInfoWrapper,
    CalendarItem,
    CalendarWrapper,
    ItemContent,
    ItemTime,
    LogInButton,
    LogInButtonWrapper,
} from './styles';

const Calendar = () => {
    return (
        <CalendarWrapper>
            <LogInButtonWrapper>
                <LogInButton>Sign In</LogInButton>
            </LogInButtonWrapper>
            <CalendarInfoWrapper>
                <CalendarInfo>
                    <CalendarItem>
                        <ItemTime>09:00</ItemTime>
                        <ItemContent>Some impotant actions</ItemContent>
                    </CalendarItem>
                    <CalendarItem>
                        <ItemTime>09:00</ItemTime>
                        <ItemContent>Some impotant actions</ItemContent>
                    </CalendarItem>
                    <CalendarItem>
                        <ItemTime>09:00</ItemTime>
                        <ItemContent>Some impotant actions</ItemContent>
                    </CalendarItem>
                    <CalendarItem>
                        <ItemTime>09:00</ItemTime>
                        <ItemContent>Some impotant actions</ItemContent>
                    </CalendarItem>
                    <CalendarItem>
                        <ItemTime>09:00</ItemTime>
                        <ItemContent>Some impotant actions</ItemContent>
                    </CalendarItem>
                    <CalendarItem>
                        <ItemTime>09:00</ItemTime>
                        <ItemContent>Some impotant actions</ItemContent>
                    </CalendarItem>
                    <CalendarItem>
                        <ItemTime>09:00</ItemTime>
                        <ItemContent>Some impotant actions</ItemContent>
                    </CalendarItem>
                    <CalendarItem>
                        <ItemTime>09:00</ItemTime>
                        <ItemContent>Some impotant actions</ItemContent>
                    </CalendarItem>
                    <CalendarItem>
                        <ItemTime>09:00</ItemTime>
                        <ItemContent>Some impotant actions</ItemContent>
                    </CalendarItem>
                    <CalendarItem>
                        <ItemTime>09:00</ItemTime>
                        <ItemContent>Some impotant actions</ItemContent>
                    </CalendarItem>
                    <CalendarItem>
                        <ItemTime>09:00</ItemTime>
                        <ItemContent>Some impotant actions</ItemContent>
                    </CalendarItem>
                </CalendarInfo>
            </CalendarInfoWrapper>
        </CalendarWrapper>
    );
};

export default Calendar;
