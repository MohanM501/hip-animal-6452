import {legacy_createStore,applyMiddleware,compose,combineReducers} from "redux"
import {reducer as City} from "./City/reducer"

import thunk from "redux-thunk"

const rootReducer = combineReducers({City});
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose
const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
export {store}