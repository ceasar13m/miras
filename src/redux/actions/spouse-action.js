import {Types} from "../action-types/action-types";

export const changeWives = (isHave) => dispatch => {
    dispatch({type: Types.SET_WIVES, payload: isHave});
};

export const changeHusband = (isHave) => dispatch => {
    dispatch({type: Types.SET_HUSBAND, payload: isHave});
};