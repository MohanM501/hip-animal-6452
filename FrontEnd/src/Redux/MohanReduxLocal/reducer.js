import { getLocalData } from "../../Mohan-Pages-1/Utils-Cart/LocalStorageData";
import * as types from "./actionType";

const initialState={
    array:getLocalData("cart_products")||[]
}

const reducer=(oldState=initialState,action)=>{
    console.log(action);
    const {type,payload}=action;

    switch(type){
        case types.POST_ARRAY_LOCAL:
            console.log("hi called in reducer");
            return {
                array:payload
            }
        default :
            return oldState;
    }
}

export {reducer};