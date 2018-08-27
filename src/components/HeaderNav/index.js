import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';
import {Col, Dropdown, Icon, Menu, Row} from 'antd';
import Container from '../ResponsiveContainer';
import SignInOut from '../SignInOut';
import styles from './HeaderNav.scss';

const menuData = [
    {
        name: 'home',
        title: '首页',
    },
    {
        name: 'compose',
        title: '智能排版',
    },
    {
        name: 'compose/ebook',
        title: '转电子书',
    },

    {
        name: 'usercenter',
        title: '个人中心',
        willShow(props) {
            return props.isLoginIn;
        },
    },

];

const more_menu = (
    <Menu>
        <Menu.Item>
            <Link to="/Morefunc/upload/1">自动编号</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/Morefunc/upload/2">公式修复</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/ComposePage/upload">公文排版</Link>
        </Menu.Item>
    </Menu>
)


const HeaderNav = (props) => {
    const {isTransparent = true, location} = props;
    let pathname = location.pathname.match(/^\/\w+\/?/) || ['/home'];
    pathname = pathname[0].slice(1).replace('/', '');

    return (
        <Container style={{position: 'relative', zIndex: 10}}>
            <Row>
                <Col span={18} style={{overflow: 'hidden'}}>
                    <Menu
                        mode="horizontal"
                        defaultSelectedKeys={['home']}
                        selectedKeys={[pathname]}
                        className={classnames(styles.menu, {
                            [styles['menu-transparent']]: isTransparent,
                        })}
                    >
                        {menuData.map((item) => {
                            if (item.willShow) {
                                switch (typeof item.willShow) {
                                    case 'function':
                                        if (!item.willShow(props)) return null;
                                        break;
                                    case 'boolean':
                                        if (!item.willShow) return null;
                                        break;
                                    default:
                                }
                            }

                            return (
                                <Menu.Item key={item.name}>
                                    <Link to={`/${item.name}`}>{item.title}</Link>
                                </Menu.Item>
                            );
                        })}

                        <Menu.Item key="less">
                            <Dropdown overlay={more_menu}>
                                <Link to="/home">更多功能<Icon type="down"/></Link>
                            </Dropdown>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col span={6}>
                    <SignInOut isTransparent={isTransparent}/>
                </Col>
            </Row>
        </Container>
    );
};
HeaderNav.propTypes = {
    isTransparent: PropTypes.bool,
    location: PropTypes.object,
    isLoginIn: PropTypes.bool,
};


export default connect(state => ({
    isLoginIn: !!state.users.current.username,
}))(HeaderNav);
