import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginScreen from 'screens/Auth/LoginScreen';
import RegisterScreen from 'screens/Auth/RegisterScreen';
import ScrollToTop from 'components/shared/ScrollToTop';

const AuthRoutes = () => {
    return (
        <ScrollToTop>
            <Switch>
                <Route path='/login' component={LoginScreen} />
                <Route path='/register' component={RegisterScreen} />
            </Switch>
        </ScrollToTop>
    );
};

export default AuthRoutes;
