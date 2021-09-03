import { listTopStories } from 'actions/storyActions';
import { Loading, Message } from 'components/shared';
import React, { useEffect } from 'react';
import { Figure, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TopStories = () => {
    const dispatch = useDispatch();

    const storyTop = useSelector(state => state.storyTop);
    const { loading, error, stories } = storyTop;

    useEffect(() => {
        dispatch(listTopStories());
    }, [dispatch]);

    return loading ? (
        <Loading />
    ) : error ? (
        <Message variant='danger'>{error}</Message>
    ) : (
        <>
            <div className="text-center text-light">
                <i className="fas fa-star" style={{ color: '#f43547' }}></i> Trending
            </div>
            <div className="top-stories">
                {stories.map((story) => (
                    <Figure key={story._id}>
                        <Image src={story.image} alt="Image" fluid />
                        <Link to={`/story/${story._id}`}>
                            <h5 className="mt-3 title">{story.title}</h5>
                        </Link>
                    </Figure>
                ))}
            </div>
        </>
    )
};

export default TopStories;
