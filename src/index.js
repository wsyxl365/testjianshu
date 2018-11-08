import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css'; //全局生效 不建议这么做 多了的话会相互冲突
import GlobalStyle from './style';
import Iconfont from "./statics/iconfont/iconfont"; //全局图标库文件
import App from './App';

ReactDOM.render(
    <React.Fragment>
        <App />
        <GlobalStyle/>
        <Iconfont/>
    </React.Fragment>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

