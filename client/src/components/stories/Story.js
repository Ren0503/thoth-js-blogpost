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
                        <Col style={{ color: '#aaa' }}>
                            <i className="fas fa-eye"></i> {story.views} {" "}
                            <i className="fas fa-comment"></i> {story.numComments}
                        </Col>
                        <Col className="text-right">
                            <Link to={`/user/${story.user._id}`}>
                                <Image src={story.user.avatar} roundedCircle width="30" />
                            </Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Story;
