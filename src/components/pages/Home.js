import React, {Fragment, useState} from 'react';
import axios from "axios";

import Search from "../user/Search";
import Users from "../user/Users";
import Alert from "../layout/Alert";

const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);

    /**
     * Search github users
     * @param query string
     * @returns {Promise<void>}
     */
    const searchUsers = async (query) => {
        setLoading(true);
        setAlert(null);

        const res = await axios.get(`https://api.github.com/search/users?q=${query}&` +
            `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}` +
            `&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        setLoading(false);
        setUsers(res.data.items);
    };

    /**
     * Clear users
     */
    const clearUsers = () => {
        setUsers([]);
    };

    /**
     * Set the alert state
     * @param message
     * @param type
     */
    const showAlert = (message, type) => {
        setAlert({message: message, type: type});
        setTimeout(() => setAlert(null), 5000);
    };

    return (
        <Fragment>
            <Alert alert={alert}/>
            <Search searchUsers={searchUsers} clearUsers={clearUsers}
                    hasUsers={users.length > 0} showAlert={showAlert}/>
            <Users loading={loading} users={users}/>
        </Fragment>
    );
};

export default Home;