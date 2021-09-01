import React from 'react';
import { Image, Menu } from 'antd';
import {
    EyeTwoTone,
    HomeTwoTone,
    LoginOutlined,
    UserAddOutlined
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'actions/userActions';
import logo from 'assets/logo.png';
import Avatar from 'antd/lib/avatar/avatar';

const { SubMenu } = Menu;

const Header = () => {
    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <div>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="home" icon={<HomeTwoTone />}>
                    Home
                </Menu.Item>
                <Menu.Item key="public" icon={<EyeTwoTone />}>
                    Public
                </Menu.Item>
                {userInfo ? (
                    <>
                        <Avatar src={userInfo.avatar} size={40} />
                        <SubMenu key="SubMenu" title={userInfo.name}>
                            <Menu.Item key="profile">Profile</Menu.Item>
                            <Menu.Item key="logout" onClick={logoutHandler}>
                                Logout
                            </Menu.Item>
                        </SubMenu>
                    </>
                ) : (
                    <>
                        <Menu.Item key="login" icon={<LoginOutlined />}>
                            <a href="/login">
                                Login
                            </a>
                        </Menu.Item>
                        <Menu.Item key="register" icon={<UserAddOutlined />}>
                            <a href="/register">
                                Register
                            </a>
                        </Menu.Item>
                    </>
                )}
            </Menu>
        </div>
    )
}

export default Header;
