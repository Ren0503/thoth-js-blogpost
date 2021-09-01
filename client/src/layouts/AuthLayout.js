import { Col, Row, Image } from 'antd';
import React from 'react';
import background from 'assets/background.jpg';

const AuthLayout = ({ children }) => {
    return (
        <div>
            <Row>
                <Col span={12}>
                    <Image 
                        src={background}
                    />
                </Col>
                <Col span={12}>
                    {children}
                </Col>
            </Row>
        </div>
    )
}

export default AuthLayout;
