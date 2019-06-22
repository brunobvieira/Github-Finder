import React, {Component} from 'react';
import axios from 'axios';

import './App.css';
import Search from "./components/user/Search";
import Navbar from './components/layout/Navbar';
import Users from "./components/user/Users";
import Alert from "./components/layout/Alert";

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

    setAlert = (message, type) => {
        this.setState({alert: {message: message, type: type}});
        setTimeout(() => this.setState({alert: null}), 5000);
    };

    /**
     * Lyfecicle render method
     * @returns {*}
     */
    render() {
        const {users, loading, alert} = this.state;

        return (
            <div className="App">
                <Navbar/>
                <div className="container">
                    <Alert alert={alert}/>
                    <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers}
                            hasUsers={users.length > 0} setAlert={this.setAlert}/>
                    <Users loading={loading} users={users}/>
                </div>
            </div>
        );
    }
}

export default App;