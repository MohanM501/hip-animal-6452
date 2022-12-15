import * as types from "./actionTypes"
import axios from "axios"

const Getpackage=(dispatch)=>{
    dispatch({type:types.GET_package_REQUEST})
    return axios
    .get("http://localhost:8080/package",{
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("token_key")}`
        }
    })
    .then((r)=>{dispatch({type:types.GET_package_SUCCESS,payload:r.data})
})
.catch((e)=>{dispatch({type:types.GET_package_FAILURE})})

}

export {Getpackage}