import {Types} from "../action-types/action-types";

const initialState = {
    gender: "male",
    father: false,
    mother: false,
    husband: false,
    wives: 0,
    sons: 0,
    daughters: 0,
    isGenderFemale: false
};

export const heirsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SET_GENDER: {
            return {
                ...state,
                gender: action.payload
            }
        }
        case Types.SET_MARRIED: {
            return {
                ...state,
                isGenderFemale: action.payload
            }
        }
        case Types.SET_SONS: {
            return {
                ...state,
                sons: +action.payload
            }
        }
        case Types.SET_DAUGHTERS: {
            return {
                ...state,
                daughters: +action.payload
            }
        }
        case Types.SET_WIVES: {
            return {
                ...state,
                wives: +action.payload
            }
        }
        case Types.SET_HUSBAND: {
            return {
                ...state,
                husband: action.payload
            }
        }
        case Types.SET_FATHER: {
            return {
                ...state,
                father: action.payload
            }
        }
        case Types.SET_MOTHER: {
            return {
                ...state,
                mother: action.payload
            }
        }
        default: {
            return state;
        }
    }
};