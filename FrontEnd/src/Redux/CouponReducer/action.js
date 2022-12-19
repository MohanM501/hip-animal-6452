import axios from "axios"
import * as types from "./actionType"

const getCoupon=(query)=>(dispatch)=>{
    console.log(query)
    dispatch(({type:types.GET_COUPON_REQUEST}))
    axios.get(`https://victorious-shoe-frog.cyclic.app/discount`,query)
    .then((res)=>{
            dispatch(({
                type:types.GET_COUPON_SUCCESS,
                payload:res.data
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
                dispatch(({
                    type:types.POST_COUPON_SUCCESS,
                    payload:res.data
                }))
                alert("Coupon Added")
                dispatch(getCoupon())
            })
            .catch((err)=>{
                console.log(err)
                dispatch(({type:types.POST_COUPON_FAILURE}))
            })
        }

        const deleteCoupon=(id)=>(dispatch)=>{
            dispatch(({type:types.DELETE_COUPON_REQUEST}))
           axios.delete(`https://victorious-shoe-frog.cyclic.app/discount/delete/${id}`)
                .then((res)=>{
                    dispatch(({
                        type:types.DELETE_COUPON_SUCCESS,
                        payload:res.data
                    }))
                    alert("Coupon Deleted Successfully")
                    dispatch(getCoupon())
                })
                .catch((err)=>{
                    console.log(err)
                    dispatch(({type:types.DELETE_COUPON_FAILURE}))
                })
            }

            const patchCoupon=(id,status)=>(dispatch)=>{
                dispatch(({type:types.EDIT_COUPON_REQUEST}))
               axios.patch(`https://victorious-shoe-frog.cyclic.app/discount/patch/${id}`,{status:!status})
                    .then((res)=>{
                        dispatch(({
                            type:types.EDIT_COUPON_SUCCESS,
                            payload:res.data
                        }))
                        dispatch(getCoupon())
                    })
                    .catch((err)=>{
                        console.log(err)
                        dispatch(({type:types.EDIT_COUPON_FAILURE}))
                    })
                }

export {getCoupon,postCoupon,deleteCoupon,patchCoupon}