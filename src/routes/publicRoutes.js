import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/login-signup';

function PublicRoutes() {
	return (
		<Fragment>
			<Switch>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Fragment>
	)
};

export default PublicRoutes;