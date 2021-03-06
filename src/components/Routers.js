import React from "react";
import {
    BrowserRouter as Router, Switch, Route
} from 'react-router-dom'
import { Home } from './Home'
import { Login } from "./Login";
import { Signup } from "./Signup";

export const Routers = () => (
    <Router>
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/Login' component={Login} />
            <Route path='/Signup'>
                <Signup />
            </Route>
        </Switch>
    </Router>
)