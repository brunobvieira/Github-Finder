import React, {Component, Fragment} from 'react';
import axios from "axios";

import Search from "../user/Search";
import Users from "../user/Users";
import Alert from "../layout/Alert";

class Home extends Component {
    /**
     * Default state
     * @type {{loading: boolean, users: Array, user: null, alert: null}}
     */
    state = {
        users: [],
        user: null,
        loading: false,
        alert: null
    };

    /**
     * Search github users
     * @param query string
     * @returns {Promise<void>}
     */
    searchUsers = async (query) => {
        this.setState({loading: true, alert: null});

        const res = await axios.get(`https://api.github.com/search/users?q=${query}&` +
            `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}` +
            `&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        this.setState({loading: false, users: res.data.items});
    };

    /**
     * Clear users
     */
    clearUsers = () => {
        this.setState({users: []});
    };

    /**
     * Set the alert state
     * @param message
     * @param type
     */
    setAlert = (message, type) => {
        this.setState({alert: {message: message, type: type}});
        setTimeout(() => this.setState({alert: null}), 5000);
    };

    render() {
        const {users, loading, alert} = this.state;

        return (
            <Fragment>
                <Alert alert={alert}/>
                <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers}
                        hasUsers={users.length > 0} setAlert={this.setAlert}/>
                <Users loading={loading} users={users}/>
            </Fragment>
        );
    }
}

export default Home;