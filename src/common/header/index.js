import React, {Component} from 'react';
import { CSSTransition } from "react-transition-group";
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from "./style";
import { connect } from "react-redux"; //建立和store的连接

const mapStateToProps = (state) => {
    return {
        focused:state.header.focused
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(){
            const action = {
                type: 'search_focus'
            };
            dispatch(action);
        },
        handleInputBlur(){
            const action = {
                type: 'search_blur'
            };
            dispatch(action);
        }
    }
}

@connect(mapStateToProps,mapDispatchToProps)
class Header extends Component {
    render(){
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
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur}
                            />
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>
                            &#xe614;
                        </i>
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