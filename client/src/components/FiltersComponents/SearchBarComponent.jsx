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
    <input
      type="text"
      name="search"
      id="search"
      value={searchText}
      onChange={onChangeInput}
      onKeyPress={onKeyPress}
    />
  );
};

export default SearchBarComponent;
