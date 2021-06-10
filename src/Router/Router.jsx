import React, { Component } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import LandingPage from '../Views/LandingPage/LandingPage';
import Details from '../Views/Details/Details';
import Register from '../Views/Register/Register';

class Router extends Component {

    render() {
        return (
                <BrowserRouter>
                    <Switch>
                        <Route
                            path={'/register'}
                            component={props => <Register {...props} />}
                        />
                        <Route
                            path={'/details'}
                            component={props => <Details {...props} />}
                        />
                        <Route
                            path={'/'}
                            component={props => <LandingPage {...props} />}
                        />
                        
                    </Switch>
                </BrowserRouter>
        );
    }
}

export default Router
