import { createStore, compose, applyMiddleware} from 'redux'; // compose就是包装函数，可以依次传入多种方法并且依次执行
import reducer from "./reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;