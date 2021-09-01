import React from 'react';
import { Card } from 'react-bootstrap';

const Story = ({ story }) => {
    return (
        <div>
            <Card>
                <Card.Img src={story.image} />

                <Card.Body>
                    <Link to={`/book/${story._id}`}>
                        <Card.Title as='h5' className="title">
                            <strong>{story.title}</strong>
                        </Card.Title>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Story;
