import {Types} from "../action-types/action-types";

const initialState = {

    husbandCoefficient: 0,
    wivesCoefficient: 0,
    fatherCoefficient: 1,
    motherCoefficient: 1 / 3,
    sonsCoefficient: 1,
    daughtersCoefficient: 1 / 2,
    sonsOfSonsCoefficient: 1,
    daughtersOfSonsCoefficient: 1 / 2,
    grandfatherCoefficient: 0,
    grandmotherCoefficient: 0,

};

export const coefficientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SET_HUSBAND_COEFF: {
            return {
                ...state,
                husbandCoefficient: action.payload
            }
        }
        case Types.SET_WIVES_COEFF: {
            return {
                ...state,
                wivesCoefficient: action.payload
            }
        }
        case Types.SET_FATHER_COEFF: {
            return {
                ...state,
                fatherCoefficient: action.payload
            }
        }
        case Types.SET_MOTHER_COEFF: {
            return {
                ...state,
                motherCoefficient: action.payload
            }
        }
        case Types.SET_SONS_COEFF: {
            return {
                ...state,
                sonsCoefficient: action.payload
            }
        }
        case Types.SET_DAUGHTERS_COEFF: {
            return {
                ...state,
                daughtersCoefficient: action.payload
            }
        }
        case Types.SET_SONS_OF_SONS_COEF: {
            return {
                ...state,
                sonsOfSonsCoefficient: action.payload
            }
        }
        case Types.SET_DAUGHTER_OF_SONS_COEF: {
            return {
                ...state,
                daughtersOfSonsCoefficient: action.payload
            }
        }
        case Types.SET_GRANDFATHER_COEF: {
            return {
                ...state,
                grandfatherCoefficient: action.payload
            }
        }
        case Types.SET_GRANDMOTHER_COEF: {
            return {
                ...state,
                grandmotherCoefficient: action.payload
            }
        }
        default: {
            return state;
        }
    }
};