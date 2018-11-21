import * as actionTypes from './constants';
import { fromJS } from "immutable";

const defaultState = fromJS({
    focused: false
});
/**
 * fromJS可以把一个js对象转化成一个immutable对象
 */

/**
 * 这里一定要保证是纯函数，返回固定值且没有副作用
 * @param state
 * @param action
 * @returns {{}}
 */
export default (state = defaultState, action ) => {
    if(action.type === actionTypes.SEARCH_FOCUS) {
        // immutable对象的set方法，会结合之前immutable对象的值
        // 和设置的值，返回一个全新的对象
        return state.set('focused', true);
    }
    if(action.type === actionTypes.SEARCH_BLUR) {
        return state.set('focused', false);
    }
    return state;
}