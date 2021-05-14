import {useEffect, useState} from 'react';
import styles from './Clock.module.css';

export function Clock() {
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
    const clockStyle = {}
    const getCoordinate = (time: number, width: number)=>{
        const deg = time*6;
        const sin = Math.sin(Math.PI*deg/180);
        const cos = Math.cos(Math.PI*deg/180);
        const x = 100+width/2*sin;
        const y = 100-width/2*cos;
        return {
            transform: `translate(-50%, -50%) rotate(${deg}deg)`,
            top: y,
            left: x
        }
    }
    const hourArrow = getCoordinate(date.getHours(),80);
    const minuteArrow = getCoordinate(date.getMinutes(),90);
    const secondArrow = getCoordinate(date.getSeconds(),100);
    return (
        <div>
            <div style={clockStyle} className={styles.clock}>
                <div style={hourArrow} className={`${styles.arrow} ${styles.hourArrow}`}>
                </div>
                <div style={minuteArrow} className={`${styles.arrow} ${styles.minuteArrow}`}>
                </div>
                <div style={secondArrow} className={`${styles.arrow} ${styles.secondArrow}`}>
                </div>
            </div>
        </div>
    )

}