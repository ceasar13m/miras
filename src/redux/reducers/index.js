import {combineReducers} from "redux";
import {heirsReducer} from "./heirs-reducer";
import {coefficientsReducer} from "./coefficients-reducer";

export const reducer =  combineReducers({
    heirsReducer: heirsReducer,
    coefficientsReducer: coefficientsReducer
})