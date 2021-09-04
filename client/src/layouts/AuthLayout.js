import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import background from 'assets/background.jpg';
import "styles/auth.css";

const AuthLayout = ({ children }) => {
    return (
        <div className="auth-overlay">
            <div className="auth-modal">
                <div className="auth-form">
                {children}
                </div>
            </div>
        </div>
    )
}

export default AuthLayout;
