import React, {useState} from 'react';
import AccordionTitle from './AccordionTitle';
import AccordionBody from './AccordionBody';

export type AccordionPropsType = {
    title: string,
    defaultCollapsed?: boolean,
    onClick: (collapsed: boolean) => void
}

export function UncontrolledAccordion({title, defaultCollapsed, ...props}: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState<boolean>(defaultCollapsed ? defaultCollapsed : false);

    const onSetCollapsed = () => {
        setCollapsed(!collapsed);
        props.onClick(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={title}
                            onSetCollapsed={onSetCollapsed}
                            collapsed={collapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
}