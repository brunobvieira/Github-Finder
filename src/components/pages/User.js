import React, {Fragment} from 'react';

import Profile from '../user/Profile';

import UserState from '../../context/user/UserState';

/**
 * User Component
 */
const User = ({match: {params}}) => {

    return (
        <UserState>
            <Fragment>
                <Profile param={params.login}/>
            </Fragment>
        </UserState>
    );
};

export default User;