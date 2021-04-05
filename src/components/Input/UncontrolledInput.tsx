import React, {ChangeEvent, createRef, MouseEvent, useRef, useState} from 'react';

export type UncontrolledInputPropsType = {}

export const UncontrolledInput = (props: UncontrolledInputPropsType) => {
    const [value, setValue] = useState<string>('');

    const inputRef = useRef<HTMLInputElement>(null);

    const onClick = ()=>{
        debugger;
        const text = inputRef.current?.value as string
        setValue(text)
    }
    const onChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.currentTarget.value);
    }

    return (
        <div>
            <input type="text" value ={value} onChange={onChange}/>
            <button  onClick={onClick}>send</button>
        </div>
    )
}