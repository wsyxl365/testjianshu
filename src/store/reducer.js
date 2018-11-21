/**
 * 大的笔记本reducer要聚集小的笔记本reducer
 **/
//import { combineReducers } from "redux"
import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "../common/header/store";

//redux-immutable

const reducer = combineReducers({
    header: headerReducer
})

export default reducer;
