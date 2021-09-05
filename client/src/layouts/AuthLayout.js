import React from 'react';
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
