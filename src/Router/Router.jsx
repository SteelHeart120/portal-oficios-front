import React, { Component } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import LandingPage from '../Views/LandingPage/LandingPage'

class Router extends Component {

    render() {
        return (
                <BrowserRouter>
                    <Switch>
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
