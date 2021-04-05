import {AccordionPropsType, UncontrolledAccordion} from './UncontrolledAccordion';
import {action} from '@storybook/addon-actions';
import {Story} from '@storybook/react/types-6-0';


const CategoryObj = (CategoryName: string)=>({
    table:{
        category: CategoryName
    }
})

export default {
    title: 'Kabzda/uncontrolledAccordion',
    component: UncontrolledAccordion,
    argTypes: {
        title: {...CategoryObj('main')},
        defaultCollapsed: {...CategoryObj('main')},
        onClick: {...CategoryObj('events')}
    }
}

const callback = action('collapsed switched to')

const Template: Story<AccordionPropsType> = (args) => <UncontrolledAccordion {...args} />



export const UncollapsedMenu = Template.bind({});
UncollapsedMenu.args = {
    title: 'Menu',
    defaultCollapsed: true,
    onClick: callback
}
export const CollapsedUsers = Template.bind({});
CollapsedUsers.args = {
    title: 'Users',
    defaultCollapsed: false,
    onClick: callback
}
