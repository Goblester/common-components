import React, {useState} from 'react';
import Star from './Star';

type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
    defaultValue?: RatingValueType,
    onClick: (value: RatingValueType)=>void
}

export function UncontrolledRating({defaultValue, ...props}: RatingPropsType) {
    const [value, setValue] = useState<RatingValueType>(defaultValue?defaultValue:0);

    const setRatingOne = () => {
        setValue(1);
        props.onClick(1)
    }
    const setRatingTwo = () => {
        setValue(2)
        props.onClick(2)
    }
    const setRatingThree = () => {
        setValue(3)
        props.onClick(3)
    }
    const setRatingFour = () => {
        setValue(4)
        props.onClick(4)
    }
    const setRatingFive = () => {
        setValue(5)
        props.onClick(5)
    }

    return (

        /*<div>
            <span onClick={setRatingOne}><Star selected={value > 0}/></span>
            <span onClick={setRatingTwo}><Star selected={value > 1}/></span>
            <span onClick={setRatingThree}><Star selected={value > 2}/></span>
            <span onClick={setRatingFour}><Star selected={value > 3}/></span>
            <span onClick={setRatingFive}><Star selected={value > 4}/></span>
        </div>*/
        <div>
           <Star selected={value > 0} setRating={setRatingOne}/>
           <Star selected={value > 1} setRating={setRatingTwo}/>
           <Star selected={value > 2} setRating={setRatingThree}/>
           <Star selected={value > 3} setRating={setRatingFour}/>
           <Star selected={value > 4} setRating={setRatingFive}/>
        </div>
    );
}
