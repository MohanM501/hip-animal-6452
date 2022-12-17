import axios from "axios"
import * as types from "./actionType"

const getCountries=(dispatch)=>{
    dispatch(({type:types.GET_COUNTRY_REQUEST}))
    axios.get(`https://countriesnow.space/api/v0.1/countries/flag/images`)
        .then((res)=>{
            dispatch(({
                type:types.GET_COUNTRY_SUCCESS,
                payload:res.data.data
            }))
        })
        .catch((err)=>{
            console.log(err)
            dispatch(({type:types.GET_COUNTRY_FAILURE}))
        })
    }

    const getSingleCoun=(name)=>(dispatch)=>{
        dispatch(({type:types.GET_COUNTRY_REQUEST}))
       axios.get(`https://restcountries.com/v3.1/name/${name}`)
            .then((res)=>{
                dispatch(({
                    type:types.SINGLE_COUNTRY_SUCCESS,
                    payload:res.data
                }))
            })
            .catch((err)=>{
                console.log(err)
                dispatch(({type:types.GET_COUNTRY_FAILURE}))
            })
        }

export {getCountries,getSingleCoun}