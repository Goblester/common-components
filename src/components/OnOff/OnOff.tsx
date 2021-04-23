import React, {useState} from 'react';

export type OnOffPropsType = {
    /**
     * defines state of switcher
     */
    on: boolean,
    /**
     * switches between on and off
     * @param on switcher: boolean
     */
    setOn: (on:boolean) => void
}

export const OnOff = React.memo(OnOffSecret);

function OnOffSecret(props: OnOffPropsType) {

    console.log('on: ' + props.on);

    const onStyle = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: props.on ? 'white' : 'red'
    }

    const indStyle = {
        display: 'inline-block',
        marginLeft: '20px',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: props.on ? 'green' : 'red'
    }

    const switchOn = ()=>{props.setOn(true)}
    const switchOff = ()=>{props.setOn(false)}

    return (
        <div>
            <div style={onStyle} onClick={switchOn}>On
            </div>
            <div style={offStyle} onClick={switchOff} >Off
            </div>
            <div style={indStyle}></div>
        </div>
    )

}