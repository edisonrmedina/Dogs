import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { findByTemperament, getAllDogs, getAllTemperaments } from '../../redux/action';

const TemperamentsComponents = () => {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);
  const onSubmitSelect = (e) => {

    e.preventDefault();
    if (["Temperaments", "Api", "BD", "..."].includes(e.target.value)) {
      //toca hacer validacion para que valide si estamos en el caso solo bd, o solo api
      // por que estamos usando para buscar por nombre el metodo que se nos pidio implementar
      dispatch(getAllDogs(e.target.value));
    }else{
      dispatch(findByTemperament(e.target.value));
    }
    
  };
  const selectStyles = {
    padding: '15px',
    marginTop: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxShadow: 'none',
    outline: 'none',
    width: '200px',
  };
  return (
    <div>
      <label className="choose"> Data: </label>
      <select  style = {selectStyles} onChange={onSubmitSelect}>
        {temperaments.map((e, i) => (
          <option key={`opc.${i}`} value={e} >
            {e}
          </option>
        ))}
      </select>
      <select  style = {selectStyles} onChange={onSubmitSelect}>
        <option value="Api" >
          Api
        </option>
        <option value="BD" >
          BD
        </option>
        <option selected value="Temperaments" >
          All Temperaments / All Dogs
        </option>
      </select>
    </div>
  )
}

export default TemperamentsComponents