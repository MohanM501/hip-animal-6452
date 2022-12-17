import * as types from "./actionTypes"
import axios from "axios"

const Getpackage=(dispatch)=>{
    dispatch({type:types.GET_package_REQUEST})
    return axios
    .get("https://agreeable-erin-stole.cyclic.app/package",{
        // headers:{
        //     "Authorization":`Bearer ${localStorage.getItem("token_key")}`
        // }
    })
    .then((r)=>{dispatch({type:types.GET_package_SUCCESS,payload:r.data})
})
.catch((e)=>{dispatch({type:types.GET_package_FAILURE})})

}

const Getfurniturn=(title)=>(dispatch)=>{
    // console.log(title)
    dispatch({type:types.GET_furniture_REQUEST})
    return axios
    .get(`http://localhost:8080/furniture`,{
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("token_key")}`
        }
    })
    .then((r)=>{dispatch({type:types.GET_furniture_SUCCESS,payload:{data:r.data, title}})
})
.catch((e)=>{dispatch({type:types.GET_furniture_FAILURE})})

}

const GetUpdate=(title)=>(dispatch)=>{
    dispatch({type:types.GET_Upadte_Title_REQUEST})
    dispatch({type:types.GET_Upadte_Title_SUCCESS,payload:title})
}
const addtowishlist=(arr)=>(dispatch)=>{
    dispatch({type:types.GET_wishlist_REQUEST})
    dispatch({type:types.GET_wishlist_SUCCESS,payload:arr})
}





export {Getpackage,Getfurniturn,GetUpdate,addtowishlist}