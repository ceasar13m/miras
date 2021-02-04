import {Types} from "../action-types/action-types";
import {store} from "../store";

export const changeSons = (count) => dispatch => {
    dispatch({type: Types.SET_SONS, payload: count});
    if (store.getState().heirsReducer.wives !== 0) {
        if (store.getState().heirsReducer.sons === 0 && store.getState().heirsReducer.daughters === 0) {
            dispatch({type: Types.SET_WIVES_COEFF, payload: 1 / 4})
        } else {
            dispatch({type: Types.SET_WIVES_COEFF, payload: 1 / 8})
        }
    } else if (store.getState().heirsReducer.husband) {
        if (store.getState().heirsReducer.sons === 0 && store.getState().heirsReducer.daughters === 0) {
            dispatch({type: Types.SET_HUSBAND_COEFF, payload: 1 / 2})
        } else {
            dispatch({type: Types.SET_HUSBAND_COEFF, payload: 1 / 4})
        }
    }

    if(store.getState().heirsReducer.mother) {
        if (store.getState().heirsReducer.sons === 0 && store.getState().heirsReducer.daughters === 0) {
            dispatch({type: Types.SET_MOTHER_COEFF, payload: 1 / 3})
        } else {
            dispatch({type: Types.SET_MOTHER_COEFF, payload: 1/ 6})
        }
    }
};

export const changeDaughters = (count) => dispatch => {
    dispatch({type: Types.SET_DAUGHTERS, payload: count});
    if (store.getState().heirsReducer.wives !== 0) {
        if (store.getState().heirsReducer.daughters === 0 && store.getState().heirsReducer.sons === 0) {
            dispatch({type: Types.SET_WIVES_COEFF, payload: 1 / 4})
        } else {
            dispatch({type: Types.SET_WIVES_COEFF, payload: 1 / 8})
        }
    } else if (store.getState().heirsReducer.husband) {
        if (store.getState().heirsReducer.sons === 0 && store.getState().heirsReducer.daughters === 0) {
            dispatch({type: Types.SET_HUSBAND_COEFF, payload: 1 / 2})
        } else {
            dispatch({type: Types.SET_HUSBAND_COEFF, payload: 1 / 4})
        }
    }
};

export const changeSonsOfSons = (count) => dispatch => {

};

export const changeDaughtersOfSonsRef = (count) => dispatch => {

};