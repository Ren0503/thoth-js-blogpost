import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createStoryComment, detailStory } from 'actions/storyActions';
import { STORY_CREATE_COMMENT_RESET } from 'constants/storyConstants';
import { Loading, Message } from 'components/shared';
import { ListGroup, Row, Col, Form, Image, Button } from 'react-bootstrap';
import MainLayout from 'layouts/MainLayout';

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
    }, [dispatch, match, successStoryComment]);

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
                    <h3 className="text-center p-3">{story.title}</h3>
                    <div className="paper text-justify">
                        <i>{story.description}</i>
                        <div className="text-justify" dangerouslySetInnerHTML={{ __html: story.body }} />
                    </div>
                    <div>
                        {story.comments.length === 0 &&
                            <Message>
                                No comments
                            </Message>
                        }
                        <ListGroup variant="flush">
                            {story.comments.map((comment) => (
                                <ListGroup.Item key={comment._id}>
                                    <Row>
                                        <Col md={1}>
                                            <Image src={comment.avatar} width="50" height="50" roundedCircle />
                                        </Col>
                                        <Col md={11}>
                                            <strong>{comment.name}</strong>
                                            <p>{comment.createdAt.substring(0, 10)}</p>
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
                </>
            )}
        </MainLayout>
    );
};

export default DetailScreen;
