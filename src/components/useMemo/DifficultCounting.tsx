import React, {ChangeEvent, useMemo, useState} from 'react';


export const DifficultCounting = React.memo(function () {
    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);

    const resultA = useMemo(()=>{
        if(a>3){
            let k = 0
            while(k<1000000000){
                k++;
            }
        }
        return getFactorial(a);
    },[a])

    const resultB = getFactorial(b);

    for (let i = 1; i<=a; i++){

    }

    const onChange = (isA: boolean) => (e: ChangeEvent<HTMLInputElement>) => {
        isA ?
            setA(+e.currentTarget.value)
            :
            setB(+e.currentTarget.value);
    }

    return (
        <>
            <input type="number" value={a} onChange={onChange(true)}/>
            <input type="number" value={b} onChange={onChange(false)}/>
            <div>
                factorial for A : {resultA}
            </div>
            <div>
                factorial for B : {resultB}
            </div>
        </>
    )
})

function getFactorial(n:number):number{
    if(n < 2){
        return 1;
    }else{
        return n*getFactorial(n-1);
    }
}