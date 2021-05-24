import React, {useEffect, useState} from 'react';
import {Meta, Story} from '@storybook/react';
import {Clock} from '../Watches/Clock';

export default {
    title: 'Kabzda/UseEffect',
    component: Clock,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;


export const UseEffectCleanUp: Story<void> = () => {
    const [text, setText] = useState<string>('');
    console.log('Component mounted');
    useEffect(() => {
        const handler = (e:KeyboardEvent) => {
            console.log(text);
            setText((text) => text + e.key);
        }
        console.log('Effect occurred');
        window.addEventListener('keypress', handler);
        return ()=>{
            console.log('Effect cleaned');
            window.removeEventListener('keypress', handler);
        }

    }, [text])

    return (
        <div>
            text:{text}
        </div>
    )
};

