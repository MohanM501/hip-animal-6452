import {legacy_createStore,applyMiddleware,compose,combineReducers} from "redux"
import {reducer as Package} from "./Package/reducer"
import {reducer as Packagetype } from "./PackageType/reducer"
import thunk from "redux-thunk"

const rootReducer = combineReducers({Package, Packagetype});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
export {store} 