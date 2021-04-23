import {action} from '@storybook/addon-actions';
import {Story} from '@storybook/react/types-6-0';
import {DifficultCounting} from './DifficultCounting';
import {CountPlusUsers} from './Users';
import {useMemo, useState} from 'react';
import {Select} from '../Select/Select';

const CategoryObj = (CategoryName: string) => ({
    table: {
        category: CategoryName
    }
})
export default {
    title: 'Kabzda/UseMemo',
    component: [DifficultCounting, CountPlusUsers, Select]
}

const callback = action('Rating value switched to')

const Template: Story<any> = (args) => <DifficultCounting  {...args}/>


export const DifficultCounting1 = Template.bind({});

export const UseMemoWithUsers = ()=><CountPlusUsers/>

type City = {
    title: string
    value: number
    population: number
    country: string
}

export const UseMemoWithSelects = ()=>{
    const [cities, setCities] = useState<Array<City>>([
        {value: 0, title: 'Moskow', population: 2000000, country: 'Russia' },
        {value: 1, title: 'Minsk', population: 1000000, country: 'Belarus' },
        {value: 2, title: 'Voloda', population: 400000, country: 'Russia' },
        {value: 3, title: 'Kirov', population: 600000, country: 'Russia' },
        {value: 4, title: 'Lviv', population: 200000, country: 'Ukraine' },
        {value: 5, title: 'Odessa', population: 300000, country: 'Ukraine' },
        {value: 6, title: 'Kiev', population: 1500000, country: 'Ukraine' },
    ]);

    const [largeCities,RussianCities,UkraineCities] = useMemo(()=>{
        const lCities = cities.filter(c=>c.population>=1000000);
        const RCities = cities.filter(c=>c.country==='Russia');
        const UCities = cities.filter(c=>c.country === 'Ukraine');
        return [lCities, RCities, UCities]
    },[cities]);


    return(
        <div>
            <Select items={largeCities}/>
            <Select items={RussianCities}/>
            <Select items={UkraineCities}/>
        </div>
    )
}

