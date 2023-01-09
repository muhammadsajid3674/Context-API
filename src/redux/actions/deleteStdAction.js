import { actionType } from "../contants/actionType";

export function deleteStdEntry(obj) {
    return {
        type: actionType.DELETE_STD,
        payload: obj
    }
}