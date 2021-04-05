import {Story} from '@storybook/react/types-6-0';
import {Select, SelectPropsType} from './Select';
import {useState} from 'react';
import {action} from '@storybook/addon-actions';


const CategoryObj = (CategoryName: string) => ({
    table: {
        category: CategoryName
    }


})


export default {
    title: 'Kabzda/Select',
    component: Select
}

const callback = action('changing value');


const Template: Story<SelectPropsType> = (args) => <Select {...args}/>

export const EmptySelect = Template.bind({});
EmptySelect.args = {
    items: [
        {value: 1, title: 'Danya'},
        {value: 2, title: 'Olya'},
        {value: 3, title: 'Dima'},
        {value: 4, title: 'Zhenya'},
    ],
    value: 2
}


export const SelectWithState: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState<any>(0);

    const changeItem = (newValue: any) => {
        callback(newValue);
        setValue(newValue);
    }

    return <Select {...args} value={value} onChange={changeItem}/>
}

SelectWithState.args = {
    items: [
        {value: 0, title: 'Danya'},
        {value: 1, title: 'Olya'},
        {value: 2, title: 'Dima'},
        {value: 3, title: 'Zhenya'},
    ]
}
