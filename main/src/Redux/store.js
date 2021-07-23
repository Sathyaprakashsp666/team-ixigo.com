import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/authReducer";
import { busReducer } from "./FetchBuses/busReducer";
const rootReducer = combineReducers({
    busReducer,authReducer
})

let composeEnhancers = compose

if(process.env.NODE_ENV !== "production"){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose
}

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(rootReducer, enhancer)

export { store }