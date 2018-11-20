/**
 * 大的笔记本reducer要聚集小的笔记本reducer
 **/
import { combineReducers } from "redux"
import {headerReducer} from "../common/header/store";

const reducer = combineReducers({
    header: headerReducer
})

export default reducer;
