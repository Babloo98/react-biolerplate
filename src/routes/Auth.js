import React , {memo} from 'react';
import { Redirect } from 'react-router-dom';
import { isLoggedIn } from '../Utils/index';
import PublicRoutes from './publicRoutes';

function Auth() {
	return isLoggedIn() ? (
			<Redirect to="/Dashboard" />
		) : (
			<PublicRoutes />
		)
}

export default memo(Auth);
