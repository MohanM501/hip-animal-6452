import * as types from "./actionTypes"

const initialState = {

    packagetype: [],
    isLoading: false,
    isError: false,
  };
  
 const reducer = (state = initialState,action) => {
  const {type,payload}=action
  switch(type){
   case types.GET_packagetype_REQUEST:
      return{
        ...state,
        isLoading:true,
        isError:false,

      }
      case types.GET_packagetype_SUCCESS:
        return{
          ...state,
          isLoading:false,
          isError:false,
         packagetype:payload,
        }
        case types.GET_packagetype_FAILURE:
        return{
          ...state,
          isLoading:false,
          isError:true,
          packagetype:[],
        }
        default:
        return state
  }

};
 export {reducer}