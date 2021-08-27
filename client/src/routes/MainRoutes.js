import React from 'react';
import { Route } from 'react-router-dom';
import StoryHome from 'screens/Stories/StoryHome';

export default function MainRoutes() {
    return (
        <>
            <Route path='/' component={StoryHome} />
        </>
    );
};