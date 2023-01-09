import { actionType } from "../contants/actionType";

const allStudents = [];

export function allStd(state = allStudents, { type, payload }) {
    switch (type) {
        case actionType.NEW_STD:
            return [...state, payload];

        case actionType.DELETE_STD:
            return state.filter(record => record.id !== payload.id);

        case actionType.UPDATE_STD:
            return state.map(record => {
                let kero = Object.assign({}, record);
                if (kero.id === payload.prevObj.id) {
                    kero = payload.obj
                }
                return kero;
            })

        default:
            return state;
    }
}