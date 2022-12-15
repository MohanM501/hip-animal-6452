import axios from "axios"
import * as types from "./actionType"

const getCoupon=(dispatch)=>{
    dispatch(({type:types.GET_COUPON_REQUEST}))
    axios.get(`https://victorious-shoe-frog.cyclic.app/discount`)
    .then((res)=>{
            dispatch(({
                type:types.GET_COUPON_SUCCESS,
                payload:res.data.data
            }))
        })
        .catch((err)=>{
            console.log(err)
            dispatch(({type:types.GET_COUPON_FAILURE}))
        })
    }

    const postCoupon=(data)=>(dispatch)=>{
        dispatch(({type:types.POST_COUPON_REQUEST}))
       axios.post(`https://victorious-shoe-frog.cyclic.app/discount/create`,data)
            .then((res)=>{
                console.log(res)
                dispatch(({
                    type:types.POST_COUPON_SUCCESS,
                    payload:res.data
                }))
                alert("Coupon Added")
                dispatch(getCoupon)
            })
            .catch((err)=>{
                console.log(err)
                dispatch(({type:types.POST_COUPON_FAILURE}))
            })
        }

export {getCoupon,postCoupon}