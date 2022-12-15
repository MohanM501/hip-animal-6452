import * as types from "./actionTypes"

const initialState = {

    package: [],
    isLoading: false,
    isError: false,
  };
  
 const reducer = (state = initialState,action) => {
  const {type,payload}=action
  switch(type){
   case types.GET_package_REQUEST:
      return{
        ...state,
        isLoading:true,
        isError:false,

      }
      case types.GET_package_SUCCESS:
        return{
          ...state,
          isLoading:false,
          isError:false,
         package:payload,
        }
        case types.GET_package_FAILURE:
        return{
          ...state,
          isLoading:false,
          isError:true,
          package:[],
        }
        default:
        return state
  }

};
 export {reducer}