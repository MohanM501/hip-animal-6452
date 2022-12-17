import * as types from "./actionTypes"
import axios from "axios"

const Getpackagetype=(dispatch)=>{
    dispatch({type:types.GET_packagetype_REQUEST})
    return axios
    .get("http://localhost:8080/packagetype",{
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("token_key")}`
        }
    })
    .then((r)=>{dispatch({type:types.GET_packagetype_SUCCESS,payload:r.data})
})
.catch((e)=>{dispatch({type:types.GET_packagetype_FAILURE})})

}

export {Getpackagetype}