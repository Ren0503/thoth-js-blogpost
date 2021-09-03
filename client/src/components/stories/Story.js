import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "styles/stories.css";

const Story = ({ story }) => {
    return (
        <div>
            <Card className="story">
                <Card.Img src={story.image} />

                <Card.Body>
                    <Link to={`/story/${story._id}`}>
                        <Card.Title as='h6' className="title">
                            <strong>{story.title}</strong>
                        </Card.Title>
                    </Link>

                    <Row>
                        <Col>
                            <p>{story.category}</p>
                        </Col>
                        <Col className="text-right">
                            <Image src={story.user.avatar} roundedCircle width="30" />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Story;
