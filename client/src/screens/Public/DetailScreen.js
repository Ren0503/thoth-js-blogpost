import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createStoryComment, detailStory } from 'actions/storyActions';
import { STORY_CREATE_COMMENT_RESET } from 'constants/storyConstants';
import { Loading, Message } from 'components/shared';
import { ListGroup, Row, Col, Form, Image, Button, Breadcrumb, Badge } from 'react-bootstrap';
import { TopStories, TextToSpeech } from 'components/stories';
import MainLayout from 'layouts/MainLayout';
import moment from 'moment';

const DetailScreen = ({ history, match }) => {
    const [body, setBody] = useState('');
    const dispatch = useDispatch();

    const storyDetail = useSelector(state => state.storyDetail);
    const { loading, error, story } = storyDetail;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const storyCommentCreate = useSelector(state => state.storyCommentCreate);
    const {
        success: successStoryComment,
        loading: loadingStoryComment,
        error: errorStoryComment,
    } = storyCommentCreate;

    useEffect(() => {
        if (successStoryComment) {
            setBody('');
        }
        if (!story._id || story._id !== match.params.id) {
            dispatch(detailStory(match.params.id));
            dispatch({ type: STORY_CREATE_COMMENT_RESET });
        }
    }, [dispatch, match, successStoryComment, story]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            createStoryComment(match.params.id, { body })
        );
    };

    return (
        <MainLayout>
            <Link className='btn btn-light my-3' to='/post'>
                <i className="fas fa-angle-left"></i> Go Back
            </Link>
            {loading ? (
                <Loading />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/category">{story.category}</Breadcrumb.Item>
                        <Breadcrumb.Item active>{story.title}</Breadcrumb.Item>
                    </Breadcrumb>
                    <Row>
                        <Col md={9}>
                            <TextToSpeech text={story.body} />
                            <div className="paper text-justify">
                                <h3 className="text-center p-3">{story.title}</h3>
                                <i>"{story.description}"</i>
                                <Image src={story.image} fluid className="p-3" />
                                <div className="text-justify paper-body" dangerouslySetInnerHTML={{ __html: story.body }} />
                                <Row>
                                    <Col md={6}>
                                        <Badge style={{ background: "#8a2be2" }}>{story.category}</Badge>
                                    </Col>
                                    <Col className="text-right" md={6}>
                                        <i>{moment(story.createdAt).calendar()}</i>
                                    </Col>
                                </Row>
                            </div>
                            <div className="author">
                                <Row>
                                    <Col md={1}>
                                        <Image className="ml-1" src={story.user.avatar} width="50" alt="Avatar" roundedCircle />
                                    </Col>
                                    <Col md={11}>
                                        <h6>{story.user.name}</h6>
                                        <p>{story.user.bio}</p>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                {story.comments.length === 0 &&
                                    <Message>
                                        No comments
                                    </Message>
                                }
                                <ListGroup variant="flush" className="comment">
                                    {story.comments.map((comment) => (
                                        <ListGroup.Item key={comment._id} style={{ background: "#0a0a0a" }}>
                                            <Row>
                                                <Col md={1}>
                                                    <Image src={comment.avatar} width="50" height="50" roundedCircle />
                                                </Col>
                                                <Col md={11}>
                                                    <strong>{comment.name}</strong>
                                                    <p>{moment(comment.createdAt).calendar()}</p>
                                                    <p>{comment.body}</p>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </div>
                            <div>
                                <ListGroup>
                                    <h2>Write a comment</h2>
                                    {successStoryComment && (
                                        <Message variant="success">
                                            Comment submitted successfully
                                        </Message>
                                    )}
                                    {loadingStoryComment && <Loading />}
                                    {errorStoryComment && (
                                        <Message variant='danger'>{errorStoryComment}</Message>
                                    )}
                                    {userInfo ? (
                                        <Form onSubmit={submitHandler}>
                                            <Form.Group controlId='body'>
                                                <Form.Label>Body</Form.Label>
                                                <Form.Control
                                                    as='textarea'
                                                    row='3'
                                                    value={body}
                                                    onChange={(e) => setBody(e.target.value)}
                                                ></Form.Control>
                                            </Form.Group>
                                            <Button
                                                disabled={loadingStoryComment}
                                                type='submit'
                                                variant='primary'
                                            >
                                                Submit
                                            </Button>
                                        </Form>
                                    ) : (
                                        <Message>
                                            Please<Link to='/login'>sign in</Link> to write a review{' '}
                                        </Message>
                                    )}
                                </ListGroup>
                            </div>
                        </Col>
                        <Col md={3}>
                            <TopStories />
                        </Col>
                    </Row>
                </>
            )}
        </MainLayout>
    );
};

export default DetailScreen;
