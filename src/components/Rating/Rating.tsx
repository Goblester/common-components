import React from "react";
import Star from "./Star";
import {RatingValueType} from '../../App';



export type RatingPropsType = {
    /**
     * Amount of stars that gets bold
     */
    value: RatingValueType,
    /**
     * defines amount of stars
     * @param value Amount of stars that gets bold
     */
    setRatingValue: (value:RatingValueType)=>void
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0} setValue = {()=>{props.setRatingValue(1)}}/>
            <Star selected={props.value > 1} setValue = {()=>{props.setRatingValue(2)}}/>
            <Star selected={props.value > 2} setValue = {()=>{props.setRatingValue(3)}}/>
            <Star selected={props.value > 3} setValue = {()=>{props.setRatingValue(4)}}/>
            <Star selected={props.value > 4} setValue = {()=>{props.setRatingValue(5)}}/>
        </div>
    );
}