import {Story} from '@storybook/react/types-6-0';
import {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Watches} from './Watches';


export default {
    title: 'Kabzda/Watches',
    component: Watches
}



const Template: Story<never> = (args) => <Watches/>

export const watches = Template.bind({});



