import React from 'react';
import styles from './auth.module.css';

function AuthLayout({ children }) {
    return (
        <div className={styles.body}>
            <div className={styles.modal}>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout;
