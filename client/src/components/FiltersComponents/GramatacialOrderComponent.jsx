import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { orderByName } from '../../redux/action';
import { useDispatch } from 'react-redux';

const GramatacialOrderComponent = () => {
    const recipes = useSelector((state)=>state.recipes);
    const [input,setInput] = useState(true);
    const dispatch = useDispatch();
    const eventClick = (e) =>{
        if(typeof(recipes)==='string') return ;
        dispatch(orderByName(input))
        setInput(!input)
    }

    return (
        <div>
                <button onClick={eventClick}>{input? 'A-Z': "Z-A"}</button>
        </div>
    )
}

export default GramatacialOrderComponent