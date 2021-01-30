import { intersection , isEmpty } from 'lodash';
import { Roles } from '../config';

export function isArrayWithLength(array){
    return (Array.isArray(array) && array.length)
};

export function getAllowedRoutes(routes) {
	const roles = JSON.parse(localStorage.getItem('roles'));
	return routes.filter(({ permission }) => {
		if(!permission) return true;
		else if(!isArrayWithLength(permission)) return true;
		else return intersection(permission, roles).length;
	});
}

export function isLoggedIn(){
	const roles = JSON.parse(localStorage.getItem('roles'));
	if(!isEmpty(roles)){
		return true;
	}
	else{
		return false
	}
}
