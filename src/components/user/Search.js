import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Search form component
 */
class Search extends Component {

    /**
     * Default state
     * @type {{text: string}}
     */
    state = {
        text: ''
    };

    /**
     * Proptypes validation definition
     * @type {{text: *}}
     */
    static propTypes = {
        text: PropTypes.string,
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        hasUsers: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    };

    /**
     * Change handler
     * @param e
     */
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    /**
     * Submit Handler
     * @param e
     */
    onSubmit = (e) => {
        e.preventDefault();

        if(this.state.text.length === 0){
            this.props.setAlert('Please enter something', 'light');
            return;
        }

        this.props.searchUsers(this.state.text);
    };

    /**
     * Clear form and users
     */
    clear = () => {
        this.setState({text: ''});
        this.props.clearUsers();
    };

    /**
     * Render lifecyle method
     * @returns {*}
     */
    render() {
        const hasUsers = this.props.hasUsers;
        const text = this.state.text;

        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" placeholder="Seach Users..." value={text}
                           onChange={this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {(text.length > 0 ||hasUsers) && (
                    <button className="btn btn-light btn-block" onClick={this.clear}>Clear</button>
                )}
            </div>
        );
    }
}

export default Search;