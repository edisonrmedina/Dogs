import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { findByName, getAllDogs } from '../../redux/action';

const SearchBarComponent = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  
  const onChangeInput = (event) => {
    event.preventDefault();
    setSearchText(event.target.value);
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if(searchText === ''){
        dispatch(getAllDogs())
    }else{
        dispatch(findByName(searchText))
    }
    setSearchText('')
  };

  return (
    <input className=''
      type="text"
      name="search"
      id="search"
      placeholder='Busca tu raza'
      alt='Busca tu raza'
      value={searchText}
      onChange={onChangeInput}
      onKeyPress={onKeyPress}
      style={{
        padding: '15px',
        margin: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxShadow: 'none',
        outline: 'none',
        width: '300px',
      }}
    />
  );
};

export default SearchBarComponent;
