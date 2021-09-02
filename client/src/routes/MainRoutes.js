import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ScrollToTop } from 'components/shared';
import ProfileScreen from 'screens/Settings/ProfileScreen';
import DetailScreen from 'screens/Public/DetailScreen';
import StoryScreen from 'screens/Public/StoryScreen';
import EditScreen from 'screens/Settings/EditScreen';
import HomeScreen from 'screens/Settings/HomeScreen';

const MainRoutes = () => {
    return (
        <ScrollToTop>
            <Switch>
                <Route path='/story/:id/edit' component={EditScreen} exact />
                <Route path='/my_stories' component={HomeScreen} exact />
                <Route path='/story/:id' component={DetailScreen} exact />
                <Route path='/profile' component={ProfileScreen} exact />
                <Route path="/" component={StoryScreen} exact />
            </Switch>
        </ScrollToTop>
    );
};

export default MainRoutes;
