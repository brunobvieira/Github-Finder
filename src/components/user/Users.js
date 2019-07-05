import React, {useContext} from 'react';

import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

import HomeContext from '../../context/home/HomeContext';

/**
 * Users list component
 * @returns {*}
 * @constructor
 */
const Users = () => {

    /**
     * Context
     */
    const homeContext = useContext(HomeContext);
    const {loading, users} = homeContext;

    if (loading) {
        return <Spinner/>;
    }

    return (
        <div style={userStyle}>
            {users.map(user => (<UserItem key={user.id} user={user}/>))}
        </div>
    );
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