import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listStories } from 'actions/storyActions';
import { Col, Row } from 'antd';
import { Loading, Message } from 'components/shared';
import { Story } from 'components/stories';
import MainLayout from 'layouts/MainLayout';

const HomeScreen = () => {
    const dispatch = useDispatch();

    const storyList = useSelector(state => state.storyList);
    const { loading, error, stories } = storyList;

    useEffect(() => {
        dispatch(listStories());
    }, [dispatch]);

    return (
        <MainLayout>
            {loading ? (
                <Loading />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                    <Row justify="space-around">
                        {stories.map((story) => (
                            <Col key={story._id} span={4}>
                                <Story story={story} />
                            </Col>
                        ))}
                    </Row>
                </>
            )}
        </MainLayout>
    )
}

export default HomeScreen;
