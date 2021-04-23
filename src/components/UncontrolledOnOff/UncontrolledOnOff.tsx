import React, {useState} from 'react';

export type OnOffPropsType = {
    defaultOn?: boolean,
    onClick: (on:boolean)=>void
}

export const UncontrolledOnOff = React.memo(UncontrolledOnOffSecret)

function UncontrolledOnOffSecret({defaultOn, onClick, ...props}: OnOffPropsType) {

    console.log('UncontrolledOnOff is rendering');

    const [on, setOn] = useState(defaultOn ? defaultOn : false);

    console.log('on: ' + on);

    const onStyle = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: on ? 'white' : 'red'
    }

    const indStyle = {
        display: 'inline-block',
        marginLeft: '20px',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: on ? 'green' : 'red'
    }

    const turnOn = ()=>{
        setOn(true);
        onClick(true);
    }
    const turnOff = ()=>{
        setOn(false);
        onClick(false);
    }

    return (
        <div>
            <div style={onStyle} onClick={turnOn}>On
            </div>
            <div style={offStyle} onClick={turnOff}>Off
            </div>
            <div style={indStyle}></div>
        </div>
    )

}