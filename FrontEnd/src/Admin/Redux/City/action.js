import * as types from "./actiontypes"
import axios from "axios"

const State=(dispatch)=>{
    dispatch({type:types.GET_City_REQUEST})
    return axios
    .get("http://localhost:8080/Citys",{
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("token_key")}`
        }
    })
    .then((r)=>{dispatch({type:types.GET_City_SUCCESS,payload:r.data})
})
.catch((e)=>{dispatch({type:types.GET_City_FAILURE})})

}

export {State}