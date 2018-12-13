import * as actionTypes from './constants';
import { fromJS } from "immutable";

const defaultState = fromJS({
    focused: false,
    list: []
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
    switch (action.type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused', true);
        case actionTypes.SEARCH_BLUR:
            return state.set('focused', false);
        case actionTypes.CHANGE_LIST:
            return state.set('list', action.data);
        default:
            return state;
    }
}