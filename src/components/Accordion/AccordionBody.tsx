import React from "react";

export const AccordionBody = React.memo(AccordionBodySecret);


function AccordionBodySecret() {
    return (
        <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
        </ul>
    )
};