import React from 'react';

type DClockPropsType = {
    date: Date
}
export const DigitalClock: React.FC<DClockPropsType> = ({date}) => {
    return (
        <>
            <span>{date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}</span>:
            <span>{date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}</span>:
            <span>{date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()}</span>
        </>
    )
}