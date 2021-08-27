import React from 'react';
import { Route } from 'react-router-dom';
import Login from 'components/auth/Login';
import Register from 'components/auth/Register';

export default function AuthRoutes() {
    return (
        <>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
        </>
    );
};