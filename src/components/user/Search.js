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
      text: PropTypes.string
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
        this.props.searchUsers(this.state.text);
    };

    /**
     * Render lifecyle method
     * @returns {*}
     */
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" placeholder="Seach Users..." value={this.state.text}
                           onChange={this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
            </div>
        );
    }
}

export default Search;