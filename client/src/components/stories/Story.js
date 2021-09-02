import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Story = ({ story }) => {
    return (
        <div>
            <Card>
                <Card.Img src={story.image} />

                <Card.Body>
                    <Link to={`/story/${story._id}`}>
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
