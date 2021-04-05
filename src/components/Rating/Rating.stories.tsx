import {action} from '@storybook/addon-actions';
import {useState} from 'react';
import {Rating, RatingPropsType} from './Rating';
import {RatingValueType} from '../../App';
import {Story} from '@storybook/react/types-6-0';


const CategoryObj = (CategoryName: string)=>({
    table:{
        category: CategoryName
    }
})


export default {
    title: 'Kabzda/Rating',
    component: Rating,
    argTypes: {
        value: {
            control: { type: 'range', min: 0, max: 5 },
            ...CategoryObj('main')
        },
        setRatingValue: {...CategoryObj('events')}
    }
}


const callback = action('clicked to switch')

const Template: Story<RatingPropsType> = (args)=> <Rating {...args}/>

export const EmptyRating = Template.bind({});
EmptyRating.args = {
    value: 0,
    setRatingValue: callback
}
export const Rating1 = Template.bind({});
Rating1.args = {
    value: 1,
    setRatingValue: callback
}
export const Rating2 = Template.bind({});
Rating2.args = {
    value: 2,
    setRatingValue: callback
}
export const Rating3 = Template.bind({});
Rating3.args = {
    value: 3,
    setRatingValue: callback
}

export const Rating4 = Template.bind({});
Rating4.args = {
    value: 4,
    setRatingValue: callback
}
export const Rating5 = Template.bind({});
Rating5.args = {
    value: 5,
    setRatingValue: callback
}

export const RatingChanging:Story<RatingPropsType> = (args) => {
    const [value, setRatingValue] = useState<RatingValueType>(0);
    return <Rating value={value} setRatingValue={setRatingValue}/>
}