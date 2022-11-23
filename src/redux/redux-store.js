import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import regionsReducer from "./regions-reducer";



let reducers = combineReducers({
    regions: regionsReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;