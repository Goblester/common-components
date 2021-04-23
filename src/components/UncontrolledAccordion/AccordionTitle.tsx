import React from "react";

type AccordionTitlePropsType = {
    title: string,
    collapsed: boolean,
    onSetCollapsed: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={props.onSetCollapsed}>--{props.title}--</h3>
        </div>
    )
}

export default React.memo(AccordionTitle);