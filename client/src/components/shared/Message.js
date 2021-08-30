import { Alert } from 'antd';
import React from 'react';

const Message = ({ type, children }) => {
    return (
        <Alert type={type}>
            {children}
        </Alert>
    );
};

Message.defaultProps = {
    type: 'info',
};

export default Message;
