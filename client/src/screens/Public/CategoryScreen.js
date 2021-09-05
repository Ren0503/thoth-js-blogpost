import React from 'react';
import MainLayout from 'layouts/MainLayout';
import book from 'assets/categories/book.jpg';
import business from 'assets/categories/business.jpg';
import culture from 'assets/categories/culture.jpg';
import discuss from 'assets/categories/discuss.jpg';
import movie from 'assets/categories/movie.jpg';
import music from 'assets/categories/music.jpg';
import science from 'assets/categories/science.jpg';
import sharing from 'assets/categories/sharing.jpg';
import sports from 'assets/categories/sports.jpg';
import travel from 'assets/categories/travel.jpg';
import "styles/category.css";

const CategoryScreen = () => {
    return (
        <MainLayout>
            <h3 className="text-center py-3">THE VISION LAND </h3>
            <ul className="honeycomb" lang="en">
                <li className="honeycomb-cell">
                    <img className="honeycomb-cell__image" src={discuss} />
                    <div className="honeycomb-cell__title">Discuss - Debate</div>
                </li>
                <li className="honeycomb-cell">
                    <img className="honeycomb-cell__image" src={science} />
                    <div className="honeycomb-cell__title">Science</div>
                </li>
                <li className="honeycomb-cell">
                    <img className="honeycomb-cell__image" src={culture} />
                    <div className="honeycomb-cell__title">Society - Culture</div>
                </li>
                <li className="honeycomb-cell">
                    <img className="honeycomb-cell__image" src={music} />
                    <div className="honeycomb-cell__title">Music</div>
                </li>
                <li className="honeycomb-cell">
                    <img className="honeycomb-cell__image" src={travel} />
                    <div className="honeycomb-cell__title">Travel World</div>
                </li>
                <li className="honeycomb-cell">
                    <img className="honeycomb-cell__image" src={sports} />
                    <div className="honeycomb-cell__title">Sports</div>
                </li>
                <li className="honeycomb-cell">
                    <img className="honeycomb-cell__image" src={movie} />
                    <div className="honeycomb-cell__title">Movie - Films</div>
                </li>
                <li className="honeycomb-cell">
                    <img className="honeycomb-cell__image" src={book} />
                    <div className="honeycomb-cell__title">Book</div>
                </li>
                <li className="honeycomb-cell">
                    <img className="honeycomb-cell__image" src={business} />
                    <div className="honeycomb-cell__title">Business</div>
                </li>
                <li className="honeycomb-cell">
                    <img className="honeycomb-cell__image" src={sharing} />
                    <div className="honeycomb-cell__title">Sharing- Tell</div>
                </li>
                <li className="honeycomb-cell">
                    <img className="honeycomb-cell__image" src={discuss} />
                    <div className="honeycomb-cell__title">Discuss - Debate</div>
                </li>
                <li className="honeycomb-cell honeycomb__placeholder" />
            </ul>

            <div className="mt-5">See More</div>
        </MainLayout>
    );
};

export default CategoryScreen
