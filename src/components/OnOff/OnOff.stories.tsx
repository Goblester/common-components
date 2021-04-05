import {action} from '@storybook/addon-actions';
import {useState} from 'react';
import {OnOff, OnOffPropsType} from './OnOff';
import {Story} from '@storybook/react/types-6-0';

const CategoryObj = (CategoryName: string) => ({
    table: {
        category: CategoryName
    }
})

export default {
    title: 'Kabzda/OnOff',
    component: OnOff,
    argTypes: {
        on: {...CategoryObj('main')},
        setOn: {...CategoryObj('event')}
    }
}


const callback = action('clicked to switch')

const callbackProps = {
    setOn: callback
}

const Template: Story<OnOffPropsType> = (args) => <OnOff {...args}/>

export const On = Template.bind({});
On.args = {
    ...callbackProps,
    on: true
}

export const Off = Template.bind({});
Off.args = {
    ...callbackProps,
    on: true
}

export const ModeChanging: Story<OnOffPropsType> = (args) => {
    const [on, setOn] = useState<boolean>(false);
    return <OnOff on={on} setOn={setOn}/>
}