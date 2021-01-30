import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { isLoggedIn } from '../Utils/index';
import { createLogger } from 'redux-logger';
import { withRouter } from "react-router";


function TopNav(props){
    let history = useHistory();

    function handleLogout(){
        localStorage.removeItem('roles');
        console.log('meri history',history)
        history.push('/');
    };

    return(
        <div>
           <div>
                {props.routes.map(({ path, title }) => {
                    {console.log(props, path, title,'>>>>>', `${props.prefix}${path}` )}
                    <Link
                        key = {path}
                        to = {`${props.prefix}${path}`}
                    >
                    {title}
                    </Link>
                })}
                {isLoggedIn() && <p onClick = { () => { handleLogout() }}>Logout</p>}
            </div>
        </div>
    )
};

TopNav.propTypes = {
    routes : PropTypes.arrayOf(
        PropTypes.shape({
            path : PropTypes.string.isRequired,
            title : PropTypes.string.isRequired
        })
    ).isRequired,
    prefix: PropTypes.string,
};

TopNav.defaultProps = {
    prefix : '',
    className : ''
};

export default withRouter(memo(TopNav))