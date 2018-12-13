import React, {Component} from 'react';
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem
} from "./style";
import { connect } from "react-redux"; //建立和store的连接

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list'])
            //state.get("header").get('focused')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(){
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            const action = actionCreators.searchBlur();
            dispatch(action);
        }
    }
}

@connect(mapStateToProps,mapDispatchToProps)
class Header extends Component {
    /**
     * 热门搜索函数
     * @param show
     * @returns {*}
     */
    getListArea = ()=>{
        const { focused, list } = this.props;
        if(focused) {
            return (<SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <div>
                    {
                        list.map((item, index)=>{
                            return (<SearchInfoItem key={item} >
                                {item}
                            </SearchInfoItem>)
                        })
                    }
                </div>
            </SearchInfo>)
        } else {
            return null;
        }
    }
    render(){
        const { focused, handleInputFocus, handleInputBlur } = this.props;
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={ handleInputFocus }
                                onBlur={ handleInputBlur }
                            />
                        </CSSTransition>
                        <i className={ focused ? 'focused iconfont' : 'iconfont'}>
                            &#xe614;
                        </i>
                        { this.getListArea() }
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <i className="iconfont">&#xe615;</i>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

export default Header;