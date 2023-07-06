import { ascendOrder, descendOrder, orderMax, orderMin } from "../../OrderingFuncionts/orderFunctions";
import { GET_ALL_DOGS, CLEAR_DOGS, GET_ALL_TEMPERAMENTS, FIND_BY_NAME, FIND_BY_TEMPERAMENT, ORDER_BY_ALF, DETAIL_DOG, ORDER_BY_WEIGHT, CLEAR_DETAIL } from "../action";

const initialState = {
    dogs: [],
    allDogs: [],
    temperaments: [],
    details: [],
};

const rootReducer = (state = initialState, action) => {
    
    switch (action.type) {
       
        case GET_ALL_DOGS :
            return {
                ...state,
                dogs : action.payload,
            };
        case CLEAR_DOGS :
            return {
                  ...state,
                  dogs :action.payload
            }
        case CLEAR_DETAIL:
            return {
                ...state,
                details :action.payload
          }
        case FIND_BY_NAME:
                return {
                  ...state,
                  dogs: action.payload,
            };
        case GET_ALL_TEMPERAMENTS:
            return {
                 ...state,
                 temperaments : action.payload
            } 
        case FIND_BY_TEMPERAMENT:
            return {
                     ...state,
                     dogs : action.payload
                }   
        case ORDER_BY_ALF:
            let orderArray;
            let allDogs = [...state.dogs];
            if(action.payload === false){orderArray = descendOrder(allDogs)}
            if(action.payload === true){orderArray = ascendOrder(allDogs)}
            return{
                ...state ,
                dogs : orderArray
            }
        case DETAIL_DOG:
            return{
                ...state,
                details : action.payload
            }
        case ORDER_BY_WEIGHT:
            let orderArrayByWeight;
            let allDogsCopy = [...state.dogs];
            if(action.payload === false){orderArrayByWeight = orderMax(allDogsCopy)}
            if(action.payload === true){orderArrayByWeight = orderMin(allDogsCopy)}
            return {
                ...state,
                dogs: orderArrayByWeight
            }
        default:
            return initialState;
    }
}

export default rootReducer;