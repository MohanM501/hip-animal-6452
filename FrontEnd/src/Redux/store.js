import {legacy_createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import {reducer as CouponReducer} from "./CouponReducer/reducer"

const rootReducer = combineReducers({CouponReducer})

const store= legacy_createStore(rootReducer,applyMiddleware(thunk))

export {store}