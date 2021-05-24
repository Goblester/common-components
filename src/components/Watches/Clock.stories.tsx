import React from 'react';
import { Story, Meta } from '@storybook/react';
import {Clock, ClockPropsType} from './Clock';

export default {
    title: 'Kabzda/Clock',
    component: Clock,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<ClockPropsType> = (args) => <Clock {...args} />;

export const DigitalClock = Template.bind({});
DigitalClock.args = {
    mode: 'digital'
};

export const AnalogClock = Template.bind({});
AnalogClock.args = {
    mode: 'analog'
};
