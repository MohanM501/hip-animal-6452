import * as types from "./actionTypes"


const initialState = {

  
    furniture:[],
    
    title:"",
    isLoading: false,
    isError: false,
  };
  
 const reducer = (state = initialState,action) => {
  const {type,payload}=action
  switch(type){
        case types.GET_furniture_REQUEST:
      return{
        ...state,
        isLoading:true,
        isError:false,

      }
      case types.GET_furniture_SUCCESS:
        return{
          ...state,
          isLoading:false,
          isError:false,
          furniture:payload.data,
          title:payload.title
        }
        case types.GET_furniture_FAILURE:
        return{
          ...state,
          isLoading:false,
          isError:true,
          furniture:[],
        }
        default:
        return state
  }

};
 export {reducer}