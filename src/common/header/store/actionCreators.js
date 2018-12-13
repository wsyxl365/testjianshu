import * as actionTypes from './constants';
import axios from "axios";
import { fromJS } from "immutable";
export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
})

const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data)
})

export const getList = ()=> {
    /**
     * 现在用了chunk，所以这边可以返回一个函数
     */
    return (dispatch) => {
        axios.get('/api/headerList.json')
            .then((res)=>{
                const { data } = res;
                console.log(data);
                dispatch(changeList(data.data));
            })
            .catch((err)=>{
                console.log("error")
            })
    }
}