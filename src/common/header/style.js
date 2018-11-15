import stlyed from "styled-components";
import logoPic from "../../statics/logo.png";

export const HeaderWrapper = stlyed.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;
export const Logo = stlyed.a.attrs({
    href: "/"
})`
    position: absolute;
    top: 0;
    left: 0;
    display: block
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = stlyed.div`
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
    width: 960px;
    height: 100%;
    //background:green
`;

export const NavItem = stlyed.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696
    }
    &.active {
        color: #ea6f5a
   }
`;

export const SearchWrapper = stlyed.div`
    //overflow: hidden;
    //position: relative;
    float: left;
    //background: red;
    .iconfont {
        position: absolute;
        margin-left:-35px
        margin-top: 13px
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        //background: green;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`;

export const NavSearch = stlyed.input.attrs({
    placeholder: '搜索'
})`
    box-sizing: border-box;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 30px 0 20px;
    width: 160px;
    height: 38px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder {
        color: #999
    }
    &.focused {
        width: 240px;  
    }
    &.slide-enter {
        width: 160px;
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`;


export const Addition = stlyed.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px; 
`;

export const Button = stlyed.div`
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    float: right;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ec6149
    }
`;