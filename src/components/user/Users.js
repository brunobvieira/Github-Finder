import React from 'react';
import PropTypes from 'prop-types';

import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

/**
 * Users list component
 * @param users
 * @param loading
 * @returns {*}
 * @constructor
 */
const Users = ({users, loading}) => {
    if(loading){
        return <Spinner/>;
    }

    return (
        <div style={userStyle}>
            {users.map(user => (<UserItem key={user.id} user={user}/>))}
        </div>
    );
};

/**
 * Proptypes definition
 * @type {{loading: *, users: *}}
 */
Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
};

/**
 * Style definition
 * @type {{gridGap: string, gridTemplateColumns: string, display: string}}
 */
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

export default Users;