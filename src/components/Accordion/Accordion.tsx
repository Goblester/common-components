import React from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';

export type AccordionPropsType = {
    /**
     * Accordion head title
     */
    title: string,
    /**
     *Defines whether accordion body displays or not
     */
    collapsed: boolean,
    /**
     * change collapsed value
     */
    onChange: () => void,
    /**
     * accordion title color
     */
    color: string
}

export function Accordion({collapsed, ...props}: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle {...props}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
}