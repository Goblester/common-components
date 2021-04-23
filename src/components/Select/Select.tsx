import React,{KeyboardEvent, useEffect, useState} from 'react';
import style from './Select.module.css'
import {ChangeValueOnKeyPress} from '../../common/commonFunc';

type ItemType = {
    title: string,
    value: any
}

export type SelectPropsType = {
    value: any,
    items: Array<ItemType>,
    onChange: (value: any) => void
}

export const Select = React.memo(SelectSecret);

export function SelectSecret({value, items, ...restProps}: SelectPropsType) {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [hoveredItemValue, setHoveredItemValue] = useState<any>(value);
    useEffect(() => {
        setHoveredItemValue(value);
    }, [value]);
    const curItem = items.find(i => i.value === value);
    const onSetEditModeClick = () => {
        setEditMode(prevState => !prevState)
    }
    const onBlur = () => {
        editMode && onSetEditModeClick();
    }
    const UpDownFlow = (directory: 'up' | 'down') => {
        let newIndexValue = ChangeValueOnKeyPress(directory, items, 'value', hoveredItemValue);
        setHoveredItemValue(items[newIndexValue].value);
        // restProps.onChange(items[newIndexValue].value);
    }

    const onKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
        debugger;
        switch (e.key) {
            case 'Enter':
                onSetEditModeClick();
                restProps.onChange(hoveredItemValue);
                return;
            case  'Escape':
                setEditMode(false);
                return;
            case 'ArrowDown':
                UpDownFlow('down');
                return
            case 'ArrowUp':
                UpDownFlow('up')
                return;

        }
        console.log(e.key);

    }
    const mappedItems = items.map((i, ind) => {
            const changeCurItem = () => {
                restProps.onChange(i.value);
                onSetEditModeClick();
            }


            const itemClass = `${style.item} 
                               ${ind === 0 && style.firstItem} 
                               ${ind === items.length - 1 && style.lastItem} 
                               ${i.value === hoveredItemValue && style.curItem}`
            return (
                <div key={i.value}
                     onClick={changeCurItem}
                     className={itemClass}>
                    {i.title}
                </div>)
        }
    );


    return (
        <div className={style.container}
             tabIndex={1}
             onKeyDown={onKeyPress}
             onBlur={onBlur}>
            {!editMode ?
                <div onClick={onSetEditModeClick} className={style.selectOff}>
                    {curItem ? curItem.title : items[0].title}
                </div>
                :
                <div className={style.selectOn}>
                    {mappedItems}
                </div>}

        </div>
    )
}