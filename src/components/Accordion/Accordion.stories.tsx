import {Accordion, AccordionPropsType} from './Accordion';
import {action} from '@storybook/addon-actions';
import {useState} from 'react';
import {Story} from '@storybook/react/types-6-0';

const CategoryObj = (CategoryName: string)=>({
    table:{
        category: CategoryName
    }
})


export default {
    title: 'Kabzda/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...CategoryObj('color')
        },
        onChange: {
            ...CategoryObj('events')
        },
        title: {
            ...CategoryObj('main')
        },
        collapsed:{
            ...CategoryObj('main')
        }

    }
}



const callback = action('clicked to switch collapse mode');

const callbackProps = {
    onChange: callback
}

const Template: Story<AccordionPropsType> = (args)=><Accordion {...args} />

export const CollapsedMenu = Template.bind({});
CollapsedMenu.args = {
    ...callbackProps,
    title : 'Menu',
    collapsed: true,
    color: 'black'
}
export const UncollapsedUsers = Template.bind({});
UncollapsedUsers.args = {
    ...callbackProps,
    title: 'Users',
    collapsed: false,
    color: 'black'
}



export const ModeChanging : Story<AccordionPropsType> = (args)=>{
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const setListCollapsed = ()=>{
        setCollapsed(!collapsed)
    }
    return <Accordion {...args} collapsed={collapsed} onChange={setListCollapsed}/>
}

ModeChanging.args = {
    title: 'Menu',
    color: 'black'
}
