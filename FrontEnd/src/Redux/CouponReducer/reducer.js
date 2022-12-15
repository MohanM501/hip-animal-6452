import * as types from "./actionType"
const initialState = {
    coupons: [],
    isLoading: false,
    isError: false,
  };

  
const reducer = (state = initialState,action) => {
  const {type,payload}=action;

  switch(type){
    case types.GET_COUPON_REQUEST:
      return{
        ...state,
        isLoading:true,
        isError:false,
      }
    case types.GET_COUPON_SUCCESS:
      return{
        ...state,
        coupons:payload,
        isLoading:false,
        isError:false,
      }
    
    case types.GET_COUPON_FAILURE:
      return{
        ...state,
        isLoading:false,
        isError:true
      }
  }
return state;
};

export {reducer}