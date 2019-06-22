import React, {Component} from 'react';
import axios from 'axios';

import './App.css';
import Search from "./components/user/Search";
import Navbar from './components/layout/Navbar';
import Users from "./components/user/Users";

/**
 *  App component
 */
class App extends Component {

    /**
     * Default state
     * @type {{loading: boolean, users: Array}}
     */
    state = {
        users: [],
        loading: false
    };

    /**
     * Search github users
     * @param query string
     * @returns {Promise<void>}
     */
    searchUsers = async (query) => {
        query = typeof query == 'undefined' ? '' : query;
        const apiUrlFetch = `https://api.github.com/users?`;
        const apiUrlSearch = `https://api.github.com/search/users?q=${query}&`;
        const apiBaseUrl = query === '' ? apiUrlFetch : apiUrlSearch;

        this.setState({loading: true});

        const res = await axios.get(apiBaseUrl +
            `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}` +
            `&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        if (query === '') {
            this.setState({loading: false, users: res.data});
            return;
        }

        this.setState({loading: false, users: res.data.items});
    };

    /**
     * Lyfecicle render method
     * @returns {*}
     */
    render() {
        return (
            <div className="App">
                <Navbar/>
                <div className="container">
                    <Search searchUsers={this.searchUsers}/>
                    <Users loading={this.state.loading} users={this.state.users}/>
                </div>
            </div>
        );
    }
}

export default App;