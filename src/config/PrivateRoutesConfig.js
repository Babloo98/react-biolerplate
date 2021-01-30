import { Roles } from './index';
import Home from '../components/login-signup/index';
import Test from '../components/test/index'

export default [
    {
        component : Test,
        path : '/',
        title : 'Dashboard',
        exact : true
    },
    {
        component : Home,
        path : '/module2',
        title : 'Module-2',
        permission : [
            Roles.SUPER_ADMIN,
            // Roles.ADMIN
        ]
    },
]