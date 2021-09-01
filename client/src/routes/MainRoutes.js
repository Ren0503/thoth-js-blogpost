import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ScrollToTop } from 'components/shared';
import ProfileScreen from 'screens/Home/ProfileScreen';
import HomeScreen from 'screens/Home/HomeScreen';

const MainRoutes = () => {
    return (
        <ScrollToTop>
            <Switch>
                <Route path='/profile' component={ProfileScreen} exact />
                <Route path="/" component={HomeScreen} exact />
            </Switch>
        </ScrollToTop>
    );
};

export default MainRoutes;
