import { Breadcrumb, Layout } from 'antd';
import React from 'react';
import Footer from '../components/core/Footer';
import Header from '../components/core/Header';

const { Content } = Layout;

const MainLayout = () => {
    return (
        <Layout>
            <Header />
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">Content</div>
            </Content>
            <Footer />
        </Layout>
    )
}

export default MainLayout;
