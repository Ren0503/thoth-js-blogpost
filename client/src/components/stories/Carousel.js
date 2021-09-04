import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';
import { listStories } from 'actions/storyActions';
import { Loading, Message } from 'components/shared';
import { Figure } from 'react-bootstrap';
import Story from './Story';

const settings = {
    className: "center",
    centerMode: false,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    speed: 500,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const Carousel = ({ category }) => {
    const dispatch = useDispatch();

    const storyList = useSelector(state => state.storyList);
    const { loading, error, stories } = storyList;

    useEffect(() => {
        dispatch(listStories('', category));
    }, [dispatch]);

    return loading ? (
        <Loading />
    ) : error ? (
        <Message variant='danger'>{error}</Message>
    ) : (
        <Slider {...settings}>
            {stories.map((story) => (
                <Figure key={story._id}>
                    <Story story={story} />
                </Figure>
            ))}
        </Slider>
    );
}

export default Carousel;
