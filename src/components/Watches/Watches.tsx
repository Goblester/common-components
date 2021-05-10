import {useEffect, useState} from 'react';


export function Watches(){
    const [date, setDate] = useState<Date>(new Date())

    useEffect(()=>{
        setInterval(()=>{
            setDate((state)=> new Date());
        },1000)
    },[date]);


    return(
        <div>
            <span>Watches</span><br/>
            {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
        </div>
    )

}