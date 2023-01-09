import { actionType } from "../contants/actionType";

export function newStdEntry(obj) {
    return {
        type: actionType.NEW_STD,
        payload: obj
    }
}