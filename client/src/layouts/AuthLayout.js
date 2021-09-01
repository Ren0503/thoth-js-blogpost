import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import background from 'assets/background.jpg';

const AuthLayout = ({ children }) => {
    return (
        <div>
            <Row>
                <Col md={6}>
                    <Image src={background} fluid/>
                </Col>
                <Col md={6}>
                    <div className="p-5">
                        {children}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AuthLayout;
