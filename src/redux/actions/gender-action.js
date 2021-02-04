import {Types} from "../action-types/action-types";
import {store} from "../store";

export const changeGender = (isMale) => dispatch => {
    if (isMale) {
        dispatch({type: Types.SET_GENDER, payload: "male"})
        dispatch({type: Types.SET_MARRIED, payload: false})
        dispatch({type: Types.SET_HUSBAND_COEFF, payload: 0})
        dispatch({type: Types.SET_HUSBAND, payload: false})
        dispatch({type: Types.SET_WIVES_COEFF, payload: 1 / 4})
    } else {
        dispatch({type: Types.SET_GENDER, payload: "female"})
        dispatch({type: Types.SET_MARRIED, payload: true})
        dispatch({type: Types.SET_HUSBAND_COEFF, payload: 1 / 2})
        dispatch({type: Types.SET_WIVES, payload: 0})
        dispatch({type: Types.SET_WIVES_COEFF, payload: 0})
    }
};