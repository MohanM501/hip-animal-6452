import * as types from "./actiontypes"

const initialState = {

    City: [],
    isLoading: false,
    isError: false,
  };
  
 const reducer = (state = initialState,action) => {
  const {type,payload}=action
  switch(type){
   case types.GET_City_REQUEST:
      return{
        ...state,
        isLoading:true,
        isError:false,

      }
      case types.GET_City_SUCCESS:
        return{
          ...state,
          isLoading:false,
          isError:false,
         City:payload,
        }
        case types.GET_City_FAILURE:
        return{
          ...state,
          isLoading:false,
          isError:true,
          City:[],
        }
        default:
        return state
  }

};
 export {reducer}