import * as types from './actionType';

const user_post_local=(payload)=>{
    return{
        type:types.POST_ARRAY_LOCAL,
        payload
    }
}

export {user_post_local}