import React , { memo } from 'react';
import { Route, Switch,  BrowserRouter as Router } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import history from '../Utils/history';
import Auth from './Auth';


function Routes() {
    return(
        <Router history = {history}>
            {console.log('Hello world!!')}
            <Switch>
                <Route path = {'/Dashboard'}>
                    <PrivateRoutes/>
                </Route>
                <Route path = ''>
                    <Auth />
                </Route>
            </Switch>
        </Router>
    )
    
};

export default Routes;