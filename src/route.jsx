import React from 'react'


import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/home';
import Results from './components/results';
const Routes =() => (
    <BrowserRouter >
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/results' component={Results}></Route>
           

        </Switch>
    </BrowserRouter>
)
export default Routes;