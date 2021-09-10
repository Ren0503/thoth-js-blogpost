import React, { useEffect } from 'react';
import { getUserDetail } from 'actions/userActions';
import { listStoryByUser } from 'actions/storyActions';
import { useDispatch, useSelector } from 'react-redux';
import { Loading, Message } from 'components/shared';
import { Breadcrumb, Col, Row, Image } from 'react-bootstrap';
import { Story } from 'components/stories';
import MainLayout from 'layouts/MainLayout';

const UserScreen = ({ match }) => {
    const userId = match.params.id;

    const dispatch = useDispatch();

    const userDetail = useSelector(state => state.userDetail);
    const { loading, error, user } = userDetail;

    const storyByUser = useSelector(state => state.storyByUser);
    const { loading: loadingStories, error: errorStories, stories } = storyByUser;

    useEffect(() => {
        if (!user.name || user._id !== userId) {
            dispatch(getUserDetail(userId));
            dispatch(listStoryByUser(userId));
        }
    }, [dispatch, userId]);

    return (
        <MainLayout>
            {loading ? (
                <Loading />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>{user.name}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="author">
                        <Row>
                            <Col sm={2} md={1}>
                                <Image className="ml-3" src={user.avatar} width="70" alt="Avatar" roundedCircle />
                            </Col>
                            <Col sm={10} md={11}>
                                <h5>{user.name}</h5>
                                <p>{user.bio}</p>
                            </Col>
                        </Row>
                    </div>
                    <h3>Stories</h3>
                    {loadingStories ? (
                        <Loading />
                    ) : errorStories ? (
                        <Message variant='danger'>{error}</Message>
                    ) : (
                        <Row>
                            {stories.map((story) => (
                                <Col key={story._id} sm={12} md={6} lg={3}>
                                    <Story story={story} />
                                </Col>
                            ))}
                        </Row>
                    )}
                </>
            )}
        </MainLayout>
    );
};

export default UserScreen;
