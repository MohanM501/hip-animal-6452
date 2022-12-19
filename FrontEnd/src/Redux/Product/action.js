import * as types from "./actionTypes"
import axios from "axios"




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







export {Getfurniturn}