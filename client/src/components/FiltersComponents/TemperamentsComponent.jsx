import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { findByTemperament, getAllTemperaments } from '../../redux/action';

const TemperamentsComponents = () => {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);
  const onSubmitSelect = (e) => {
    debugger;
    e.preventDefault();
    dispatch(findByTemperament(e.target.value));
  };
  return (
    <div>
      <label className="choose"> Choose a diet : </label>
      <select onChange={onSubmitSelect}>
        <option value="Temperaments" >
          All Temperaments
        </option>
        {temperaments.map((e, i) => (
          <option key={`opc.${i}`} value={e} >
            {e}
          </option>
        ))}
      </select>
    </div>
  )
}

export default TemperamentsComponents