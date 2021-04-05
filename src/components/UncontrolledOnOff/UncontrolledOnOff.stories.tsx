import {OnOffPropsType, UncontrolledOnOff} from './UncontrolledOnOff';
import {action} from '@storybook/addon-actions';
import {Story} from '@storybook/react/types-6-0';


const CategoryObj = (CategoryName: string)=>({
    table:{
        category: CategoryName
    }
})

export default {
    title: 'Kabzda/Uncontrolled OnOff',
    component: UncontrolledOnOff,
    argTypes: {
        On:{...CategoryObj('main')},
        onClick:{...CategoryObj('events')},
    }
}

const callback = action('switched');

const Template: Story<OnOffPropsType> = (args) => <UncontrolledOnOff {...args}/>

export const On = Template.bind({});
On.args = {
    defaultOn: true,
    onClick: callback
}

export const Off = Template.bind({});
Off.args = {
    defaultOn: false,
    onClick: callback
}
