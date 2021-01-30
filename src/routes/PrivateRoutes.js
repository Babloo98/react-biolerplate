import React, { Fragment } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { getAllowedRoutes, isLoggedIn } from '../Utils/index';
import  PrivateRoutesConfig  from '../config/PrivateRoutesConfig';
import MapAllowedRoutes from './MapAllowedRoutes';
import TopNav  from '../common/TopNav';


function PrivateRoutes() {
    const match = useRouteMatch('/Dashboard');
    let allowedRoutes = [];

    if(isLoggedIn()){
        allowedRoutes = getAllowedRoutes(PrivateRoutesConfig);
    }
    else{
        return <Redirect to = '/' />;
    }

    return (
        <Fragment>
            <TopNav
                routes = { allowedRoutes }
                path = { match.path }
            />
            <MapAllowedRoutes
                routes = { allowedRoutes }
                basePath = '/Dashboard'
                isAddNotFound
            />
        </Fragment>
    )
};

export default PrivateRoutes;