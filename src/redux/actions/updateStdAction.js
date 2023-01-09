import { actionType } from "../contants/actionType";

export function updateStdEntry(obj, prevObj) {
    return {
        type: actionType.UPDATE_STD,
        payload: {
            obj,
            prevObj
        }
    }
}