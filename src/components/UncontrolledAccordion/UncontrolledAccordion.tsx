import React, {useReducer, useState} from 'react';
import AccordionTitle from './AccordionTitle';
import AccordionBody from './AccordionBody';
import {unAccordionReducer} from './uncontrolledAccordionReducer';

export type AccordionPropsType = {
    title: string,
    defaultCollapsed?: boolean,
    onClick: (collapsed: boolean) => void
}

export const UncontrolledAccordion = React.memo(UncontrolledAccordionSecret);

function UncontrolledAccordionSecret({title, defaultCollapsed, ...props}: AccordionPropsType) {

    const [state, dispatch] = useReducer(unAccordionReducer, {collapsed: false})

    const onSetCollapsed = () => {
        dispatch({type: 'TOGGLE_COLLAPSED',
            collapsed : !state.collapsed});
        props.onClick(!state.collapsed)
    }

    return (
        <div>
            <AccordionTitle title={title}
                            onSetCollapsed={onSetCollapsed}
                            collapsed={state.collapsed}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    );
}