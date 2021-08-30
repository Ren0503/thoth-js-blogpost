import { Image, Menu } from 'antd';
import React from 'react';
import { EyeTwoTone, HomeTwoTone, LogoutOutlined } from '@ant-design/icons';
import logo from '';

const Header = () => {
    return (
        <div style={{ margin: 0 }}>
            <Menu theme="dark" mode="horizontal">
                <Image src={} />
                <Menu.Item key="home" icon={<HomeTwoTone />}>
                    My Home
                </Menu.Item>
                <Menu.Item key="public" icon={<EyeTwoTone />}>
                    Public
                </Menu.Item>
                <Menu.Item key="logout" icon={<LogoutOutlined />}>
                    Logout
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Header;
