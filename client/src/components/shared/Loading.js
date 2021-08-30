import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Loading = () => {
    return (
        <div>
            <Spin indicator={antIcon} size="large" />
        </div>
    );
};

export default Loading;
