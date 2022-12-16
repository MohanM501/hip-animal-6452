import axios from "axios"
import * as types from "./actionType"

const getAll=(query)=>(dispatch)=>{
    dispatch(({type:types.GET_PRODUCTS_REQUEST}))
    axios.get(`https://victorious-shoe-frog.cyclic.app/products`,query)
    .then((res)=>{
            dispatch(({
                type:types.GET_PRODUCTS_SUCCESS,
                payload:res.data
            }))
        })
        .catch((err)=>{
            console.log(err)
            dispatch(({type:types.GET_PRODUCTS_FAILURE}))
        })
    }

    const postData=(data)=>(dispatch)=>{
        dispatch(({type:types.POST_PRODUCTS_REQUEST}))
       axios.post(`https://victorious-shoe-frog.cyclic.app/products/post`,data)
            .then((res)=>{
                dispatch(({
                    type:types.POST_PRODUCTS_SUCCESS,
                    payload:res.data
                }))
                alert("Inventory Added")
                dispatch(getAll())
            })
            .catch((err)=>{
                console.log(err)
                dispatch(({type:types.POST_PRODUCTS_FAILURE}))
            })
        }

    const deleteData=(id)=>(dispatch)=>{
        dispatch(({type:types.POST_PRODUCTS_REQUEST}))
       axios.delete(`https://victorious-shoe-frog.cyclic.app/products/delete/${id}`)
            .then((res)=>{
                dispatch(({
                    type:types.POST_PRODUCTS_SUCCESS,
                    payload:res.data
                }))
                dispatch(getAll())
            })
            .catch((err)=>{
                console.log(err)
                dispatch(({type:types.POST_PRODUCTS_FAILURE}))
            })
        }


export {getAll,postData,deleteData}