import {UncontrolledInput} from './UncontrolledInput';
import {ChangeEvent, useState} from 'react';


const CategoryObj = (CategoryName: string) => ({
    table: {
        category: CategoryName
    }
})

export default {
    title: 'Kabzda/Uncontrolled Input',
    component: UncontrolledInput,
    argTypes: {}
}

export const ControlledInput = ()=>{
    const [value, setValue] = useState<string>('');

    const onChange = (e:ChangeEvent<HTMLInputElement>)=> {
        setValue(e.currentTarget.value);
    }
    return <input value={value} onChange={onChange}/>
}

export const ControlledCheckbox = ()=>{
    const [value, setValue] = useState<boolean>(false);

    const onChange = (e:ChangeEvent<HTMLInputElement>)=> {
        setValue(e.currentTarget.checked);
    }
    return <input type={'checkbox'} checked={value} onChange={onChange}/>
}

export const ControlledSelect = ()=>{
    const [value, setValue] = useState<string | undefined>(undefined);

    const onChange = (e:ChangeEvent<HTMLSelectElement>)=> {
        setValue(e.currentTarget.value);
    }
    return <select  value={value} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moskow</option>
        <option value={'3'}>Kiev</option>
    </select>
}