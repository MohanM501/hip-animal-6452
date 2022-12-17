import * as types from "./actionTypes"

const initialState = {

    package: [],
    furniture:[],
    wishlist:[],
    title:"",
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

        case types.GET_Upadte_Title_REQUEST:
          return{
            ...state,
            isLoading:true,
          }

          case types.GET_Upadte_Title_SUCCESS:
          return{
            ...state,
            isLoading:false,
            title:payload,

          }


          case types.GET_wishlist_REQUEST:
        return{
          ...state,
          isLoading:true,
          isError:false,
         
        }
        case types.GET_wishlist_SUCCESS:
        return{
          ...state,
          isLoading:false,
          isError:false,
          wishlist:payload,
        }



        default:
        return state
  }

};
 export {reducer}