import React, { useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listStories } from 'actions/storyActions';
import { Breadcrumb, Col, Row } from 'react-bootstrap';
import { Loading, Message } from 'components/shared';
import { Story } from 'components/stories';
import { Search } from 'components/core';
import MainLayout from 'layouts/MainLayout';

const StoryScreen = ({ match }) => {
    const keyword = match.params.keyword;
    const category = match.params.category;
    const dispatch = useDispatch();

    const storyList = useSelector(state => state.storyList);
    const { loading, error, stories } = storyList;

    useEffect(() => {
        dispatch(listStories(keyword, category));
    }, [dispatch, keyword, category]);

    return (
        <MainLayout>
            {loading ? (
                <Loading />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                    {keyword ? (
                        <h2>Result for {keyword}</h2>
                    ) : category ? (
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>{category}</Breadcrumb.Item>
                        </Breadcrumb>
                    ) : (
                        <div className="home">
                            <Route render={({ history }) => <Search history={history} />} />
                        </div>
                    )}
                    <h4 className="my-3">All Stories</h4>
                    <Row className="mt-2">
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
