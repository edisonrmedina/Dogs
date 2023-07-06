import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { orderByMinMax } from '../../redux/action';

const WeigthOrderComponent = () => {
    const allDogs = useSelector((state)=>state.dogs)
    const [input,setInput] = useState(true)
    const dispatch = useDispatch()
    const eventClick = (e) =>{
        if(typeof(allDogs)==='string') return ;
        dispatch(orderByMinMax(input))
        setInput(!input)
    }
  return (
    <div>
        <button onClick={eventClick} className={'order_alf'}>{input? 'Max-Min': "Min-Max"}</button>
    </div>
  )
}

export default WeigthOrderComponent