import * as types from "./actionType"
const initialState = {
    countries: [],
    singleCountry:[],
    isLoading: false,
    isError: false,
  };

  
export const reducer = (state = initialState,action) => {
  const {type,payload}=action;

  switch(type){
    case types.GET_COUNTRY_REQUEST:
      return{
        ...state,
        isLoading:true
      }
    case types.GET_COUNTRY_SUCCESS:
      return{
        ...state,
        isLoading:false,
        countries:payload,
        singleCountry:[]
      }
    
    case types.SINGLE_COUNTRY_SUCCESS:
      return{
        ...state,
        singleCountry:payload
      }

    case types.GET_COUNTRY_FAILURE:
      return{
        ...state,
        isLoading:false,
        isError:false
      }
  }
return state;
};

export default reducer