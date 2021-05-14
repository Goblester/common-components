import {Story} from '@storybook/react/types-6-0';
import {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Clock} from './Clock';


export default {
    title: 'Kabzda/Clock',
    component: Clock
}



const Template: Story<never> = (args) => <Clock/>

export const clock = Template.bind({});



