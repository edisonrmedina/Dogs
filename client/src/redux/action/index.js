import axios from "axios";
export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const CLEAR_DOGS = "CLEAR_DOGS";
export const GET_ALL_TEMPERAMENTS = "GET_ALL_TEMPERAMENTS";
export const FIND_BY_NAME = "FIND_BY_NAME";
export const FIND_BY_TEMPERAMENT = "FIND_BY_TEMPERAMENT";
export const ORDER_BY_ALF = "ORDER_BY_ALF";
export const DETAIL_DOG = "DETAIL_DOG";

export const getAllDogs = () => async (dispatch) => {
    const { data } = await axios.get("http://localhost:3001/dogs");
    dispatch({
      type: GET_ALL_DOGS,
      payload: data
    });
};

export const findByName = (name) => async (dispatch) => {
  
  const { data } = await axios.get(`http://localhost:3001/dog?name=${name}`);
  console.log(data);
  dispatch({
    type: FIND_BY_NAME,
    payload: data
  });
};

export const findByTemperament = (temperament) => async (dispatch) => {
  
  const { data } = await axios.get(`http://localhost:3001/dogTemperament?temperament=${temperament}`);
  console.log(data);
  dispatch({
    type: FIND_BY_TEMPERAMENT,
    payload: data
  });

};

export const orderByName =  (boolean) =>{
  return ({
    type : ORDER_BY_ALF,
    payload : boolean
  })
};

export const clearDogs = () =>{   //!recordar borrarr y mirara odnde lo usas
  return ({
    type : CLEAR_DOGS,
    payload : []
  });
}

export const getAllTemperaments = () => async (dispatch) => {
  const { data } = await axios.get("http://localhost:3001/temperaments");
  
  dispatch({
    type: GET_ALL_TEMPERAMENTS,
    payload: data
  });
  
}

export const dogDetail = (id) => async (dispatch) =>{
  debugger;
  const {data} = await axios.get(`http://localhost:3001/dogs/${id}`);
  dispatch({
    type : DETAIL_DOG ,
    payload : data
  })
} 

export const postDog =(dog) =>{
  return async () => {
   await axios.post("http://localhost:3001/dog", dog)
  };
}