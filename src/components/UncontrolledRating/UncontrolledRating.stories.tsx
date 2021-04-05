import {RatingPropsType, UncontrolledRating} from './UncontrolledRating';
import {action} from '@storybook/addon-actions';
import {Story} from '@storybook/react/types-6-0';

const CategoryObj = (CategoryName: string)=>({
    table:{
        category: CategoryName
    }
})
export default {
    title: 'Kabzda/Uncontrolled Rating',
    component: UncontrolledRating,
    argTypes: {
        defaultValue: {...CategoryObj('main')},
        onClick: {...CategoryObj('events')}
    }
}

const callback = action('Rating value switched to')

const Template: Story<RatingPropsType> = (args)=> <UncontrolledRating  {...args}/>


export const EmptyRating = Template.bind({});
EmptyRating.args = {
    defaultValue : 0,
    onClick : callback
}

export const Rating1 = Template.bind({});
Rating1.args = {
    defaultValue : 1,
    onClick : callback
}

export const Rating2 = Template.bind({});
Rating2.args = {
    defaultValue : 2 ,
    onClick : callback
}
export const Rating3 = Template.bind({});
Rating3.args = {
    defaultValue : 3,
    onClick : callback
}
export const Rating4 = Template.bind({});
Rating4.args = {
    defaultValue : 4,
    onClick : callback
}
export const Rating5 = Template.bind({});
Rating5.args = {
    defaultValue : 5,
    onClick : callback
}
