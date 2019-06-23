import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import axios from "axios/index";

import Spinner from "../layout/Spinner";
import Alert from "../layout/Alert";

/**
 * User Component
 */
class User extends Component {

    state = {
        user: null,
        alert: null,
        loading: false
    };

    /**
     * Search a github user by username
     * @returns {Promise<void>}
     */
    async componentDidMount() {
        const {match: {params}} = this.props;

        this.setState({loading: true});

        try {
            const res = await axios.get(`https://api.github.com/users/${params.login}` +
                `?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}` +
                `&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
            this.setState({loading: false, user: res.data});
        } catch (e) {
            this.setAlert('User not Found!', 'light');
            this.setState({loading: false, user: null});
        }
    }

    /**
     * Set the alert state
     * @param message
     * @param type
     */
    setAlert = (message, type) => {
        this.setState({alert: {message: message, type: type}});
    };

    render() {
        const {user, loading, alert} = this.state;

        if (loading) return <Spinner/>;

        if (user === null) {
            return (
                <Fragment>
                    <Alert alert={alert}/>
                    <Link to="/" className="btn btn-light">Back to search</Link>
                </Fragment>
            );
        }

        const {
            name,
            avatar_url,
            location,
            company,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = user;

        return (
            <Fragment>
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} alt={name} className="round-img" style={{width: "150px"}}/>
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                        <p>Hireble: {hireable ?
                            (<i className="fas fa-check text-success"/>) :
                            (<i className="fas fa-times-circle text-danger"/>)}
                        </p>
                    </div>
                    <div>
                        {bio && <Fragment><h3>Bio</h3><p>{bio}</p></Fragment>}
                        <a href={html_url} className="btn btn-dark my-1">Visit github profile</a>
                        <ul>
                            <li><strong>Username: </strong> {login}</li>
                            <li>{company && <Fragment><strong>Company: </strong>{company}</Fragment>}</li>
                            <li>{blog && <Fragment><strong>Website: </strong>{blog}</Fragment>}</li>
                        </ul>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">Followers: {followers}</div>
                    <div className="badge badge-success">Following: {following}</div>
                    <div className="badge badge-dark">Public Repos: {public_repos}</div>
                    <div className="badge badge-light">Public Gists: {public_gists}</div>
                </div>
                <Link to="/" className="btn btn-light">Back to search</Link>
            </Fragment>
        );
    }
}

export default User;