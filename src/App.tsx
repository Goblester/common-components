import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {Test} from './01/test';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5


function App() {

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [on, setOn] = useState<boolean>(false);

    const setListCollapsed = ()=>{
        setCollapsed(!collapsed)
    };


    return (
        <div className="App">
            <Accordion title={'Menu'} onChange={setListCollapsed} collapsed = {collapsed} color={'green'}/>
            <Rating value={ratingValue}  setRatingValue={setRatingValue}/>
            <OnOff setOn = {setOn} on = {on}/>
            <Test/>
        </div>
    );
}

export default App;
