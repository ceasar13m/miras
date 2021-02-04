import {Types} from "../action-types/action-types";

export const changeFather = (isAlive) => dispatch => {
    dispatch({type: Types.SET_FATHER, payload: isAlive});
};

export const changeMother = (isAlive) => dispatch => {
    dispatch({type: Types.SET_MOTHER, payload: isAlive});
};