import { combineReducers } from "redux";
import { allStd } from './allStdReducer';

export const parent = combineReducers({
    allStd: allStd
})