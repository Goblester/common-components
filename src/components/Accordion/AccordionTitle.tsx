import React from 'react';

type AccordionTitlePropsType = {
    title: string,
    onChange: () => void,
    color: string
}

export function AccordionTitle({title, color, ...props}: AccordionTitlePropsType) {

    const onClickHandler = () => {
        props.onChange()
    }

    const titleStyle = {
        color: color
    }

    return (
        <div>
            <h3 onClick={onClickHandler}
                style={titleStyle}
            >--{title}--</h3>
        </div>
    )
}