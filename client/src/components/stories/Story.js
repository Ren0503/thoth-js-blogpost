import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const Story = ({ story }) => {
    return (
        <div>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="Image" src={story.image} />}
            >
                <Meta title={story.title} description={story.description} />
            </Card>
        </div>
    );
};

export default Story;
