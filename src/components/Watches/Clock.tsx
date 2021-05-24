import React, {useEffect, useState} from 'react';
import { AnalogClock } from './AnalogClock';
import {DigitalClock} from './DigitalClock';
import styles from './Clock.module.css';

export type ClockPropsType = {
    mode?: 'digital' | 'analog'
}

export const Clock = React.memo(({mode}:ClockPropsType)=> {
    const [date, setDate] = useState<Date>(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('clock');
            setDate((state) => new Date());
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [date]);
    let view;
    switch (mode){
        case 'analog':
            view = <AnalogClock date={date}/>
            break
        case 'digital':
        default:
            view = <DigitalClock date={date}/>
    }

    return (
        <div className={styles.clock}>
            {view}
        </div>
    )
})

