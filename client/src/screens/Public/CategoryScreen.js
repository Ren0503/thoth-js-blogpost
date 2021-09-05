import React from 'react';
import { Link } from 'react-router-dom';
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
import indite from 'assets/categories/indite.jpg';
import "styles/category.css";

const CategoryScreen = () => {
    return (
        <MainLayout>
            <h3 className="text-center py-3">THE CATEGORIES ARTICLE </h3>
            <ul className="honeycomb" lang="en">
                <li className="honeycomb-cell">
                    <img className="honeycomb-cell__image" src={discuss} alt="Discuss" />
                    <Link to={`/category/discuss`}>
                        <div className="honeycomb-cell__title">Discuss - Debate</div>
                    </Link>
                </li>
                <li className="honeycomb-cell">
                    <img className="honeycomb-cell__image" src={science} alt="Science" />
                    <Link to={`/category/science`}>
                        <div className="honeycomb-cell__title">Science</div>
                    </Link>
                </li>
                <li className="honeycomb-cell">
                    <img className="honeycomb-cell__image" src={culture} alt="Culture" />
                    <Link to={`/category/culture`}>
                        <div className="honeycomb-cell__title">Society - Culture</div>
                    </Link>
                </li>
                <li className="honeycomb-cell">
                    <img className="honeycomb-cell__image" src={music} alt="Music" />
                    <Link to={`/category/music`}>
                        <div className="honeycomb-cell__title">Music</div>
                    </Link>
                </li>
                <li className="honeycomb-cell">
                    <img className="honeycomb-cell__image" src={travel} alt="Travel" />
                    <Link to={`/category/travel`}>
                        <div className="honeycomb-cell__title">Travel World</div>
                    </Link>
                </li>
                <li className="honeycomb-cell">
                    <img className="honeycomb-cell__image" src={sports} alt="Sports" />
                    <Link to={`/category/sports`}>
                        <div className="honeycomb-cell__title">Sports</div>
                    </Link>
                </li>
                <li className="honeycomb-cell">
                    <img className="honeycomb-cell__image" src={movie} alt="Movie" />
                    <Link to={`/category/movie`}>
                        <div className="honeycomb-cell__title">Movie - Films</div>
                    </Link>
                </li>
                <li className="honeycomb-cell">
                    <img className="honeycomb-cell__image" src={book} alt="Book" />
                    <Link to={`/category/book`}>
                        <div className="honeycomb-cell__title">Book</div>
                    </Link>
                </li>
                <li className="honeycomb-cell">
                    <img className="honeycomb-cell__image" src={business} alt="Business" />
                    <Link to={`/category/business`}>
                        <div className="honeycomb-cell__title">Business</div>
                    </Link>
                </li>
                <li className="honeycomb-cell">
                    <img className="honeycomb-cell__image" src={sharing} alt="Sharing" />
                    <Link to={`/category/sharing`}>
                        <div className="honeycomb-cell__title">Sharing- Tell</div>
                    </Link>
                </li>
                <li className="honeycomb-cell">
                    <img className="honeycomb-cell__image" src={indite} alt="Indite" />
                    <Link to={`/category/indite`}>
                        <div className="honeycomb-cell__title">Indite</div>
                    </Link>
                </li>
                <li className="honeycomb-cell honeycomb__placeholder" />
            </ul>

            <div className="mt-5"></div>
        </MainLayout>
    );
};

export default CategoryScreen
