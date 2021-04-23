import React from "react";

type StarPropsType = {
    selected: boolean,
    setRating: ()=>void
}



function Star(props: StarPropsType) {

    return (
        <span onClick={props.setRating}>
            {props.selected ? <b>star </b> : "star "}
        </span>
    )
}

export default React.memo(Star);