import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listStories } from 'actions/storyActions';
import { Col, Row } from 'react-bootstrap';
import { Loading, Message } from 'components/shared';
import { Story } from 'components/stories';
import MainLayout from 'layouts/MainLayout';

const StoryScreen = ({ match }) => {
    const keyword = match.params.keyword;
    const dispatch = useDispatch();

    const storyList = useSelector(state => state.storyList);
    const { loading, error, stories } = storyList;

    useEffect(() => {
        dispatch(listStories(keyword));
    }, [dispatch, keyword]);

    return (
        <MainLayout>
            {loading ? (
                <Loading />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                    <Row>
                        {stories.map((story) => (
                            <Col key={story._id} sm={12} md={6} lg={3}>
                                <Story story={story} />
                            </Col>
                        ))}
                    </Row>
                </>
            )}
        </MainLayout>
    )
}

export default StoryScreen;
