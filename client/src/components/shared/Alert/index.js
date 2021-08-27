import React from 'react';
import styles from './alert.module.css';

const Alert = ({ variant, children }) => {
    return (
        <div className={styles.alert}>
            {children}
        </div>
    )
}

export default Alert;
