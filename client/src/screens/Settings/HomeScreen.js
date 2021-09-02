import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    createStory,
    deleteStory,
    myStories
} from 'actions/storyActions';
import { STORY_CREATE_RESET } from 'constants/storyConstants';
import MainLayout from 'layouts/MainLayout';
import { Loading, Message } from 'components/shared';
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Col, Button, Table } from 'react-bootstrap';

const HomeScreen = ({ history, match }) => {
    const dispatch = useDispatch();

    const storyListMy = useSelector(state => state.storyListMy);
    const { loading, error, stories } = storyListMy;

    const storyDelete = useSelector(state => state.storyDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = storyDelete;

    const storyCreate = useSelector(state => state.storyCreate);
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        story: createdStory
    } = storyCreate;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        dispatch({ type: STORY_CREATE_RESET });

        if (!userInfo) {
            history.push('/login');
        }

        if (successCreate) {
            history.push(`/story/${createdStory._id}/edit`);
        } else {
            dispatch(myStories());
        }
    }, [
        dispatch,
        history,
        userInfo,
        successDelete,
        successCreate,
        createdStory,
    ]);

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteStory(id));
        }
    };

    const createStoryHandler = () => {
        dispatch(createStory());
    };

    return (
        <MainLayout>
            <Row>
                <Col><h1>My Stories</h1></Col>
                <Col className='text-right'>
                    <Button className='my-3' onClick={createStoryHandler}>
                        <i className='fas fa-plus'></i> Create Story
                    </Button>
                </Col>
            </Row>
            {loadingDelete && <Loading />}
            {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
            {loadingCreate && <Loading />}
            {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
            {loading ? (
                <Loading />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>TITLE</th>
                                <th>DATE</th>
                                <th>CATEGORY</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {stories.map((story) => (
                                <tr key={story._id}>
                                    <td>{story.title}</td>
                                    <td>{story.createdAt.substring(0, 10)}</td>
                                    <td>{story.category}</td>
                                    <td>
                                        <LinkContainer to={`/story/${story._id}/edit`}>
                                            <Button variant='light' className='btn-sm'>
                                                <i className='fas fa-edit'></i>
                                            </Button>
                                        </LinkContainer>
                                        <Button
                                            variant='danger'
                                            className='btn-sm'
                                            onClick={() => deleteHandler(story._id)}
                                        >
                                            <i className='fas fa-trash'></i>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
            )}
        </MainLayout>
    );
};

export default HomeScreen;
