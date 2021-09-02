import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ScrollToTop } from 'components/shared';
import ProfileScreen from 'screens/Settings/ProfileScreen';
import DetailScreen from 'screens/Public/DetailScreen';
import StoryScreen from 'screens/Public/StoryScreen';

const MainRoutes = () => {
    return (
        <ScrollToTop>
            <Switch>
                <Route path='/story/:id' component={DetailScreen} exact />
                <Route path='/profile' component={ProfileScreen} exact />
                <Route path="/" component={StoryScreen} exact />
            </Switch>
        </ScrollToTop>
    );
};

export default MainRoutes;
