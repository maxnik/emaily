import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './Dashboard';
import Header from './Header';
import Login from './Login';
import LoginGoogle from './LoginGoogle';
import Landing from './Landing';
import requireAuth from './requireAuth';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route
                        path="/dashboard"
                        component={requireAuth(Dashboard)}
                    />
                    <Route path="/login/google" component={LoginGoogle} />
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Landing} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
