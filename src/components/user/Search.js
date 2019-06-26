import React, {useState} from 'react';
import PropTypes from 'prop-types';

/**
 * Search form component
 */
const Search = ({searchUsers, clearUsers, hasUsers, showAlert}) => {

    /**
     * Default state
     */
    const [text, setText] = useState('');

    /**
     * Change handler
     * @param e
     */
    const onChange = (e) => {
        setText(e.target.value);
    };

    /**
     * Submit Handler
     * @param e
     */
    const onSubmit = (e) => {
        e.preventDefault();

        if (text.length === 0) {
            showAlert('Please enter something', 'light');
            return;
        }

        searchUsers(text);
    };

    /**
     * Clear form and users
     */
    const clear = () => {
        setText({text: ''});
        clearUsers();
    };

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <input type="text" name="text" placeholder="Seach Users..." value={text} onChange={onChange}/>
                <input type="submit" value="Search" className="btn btn-dark btn-block"/>
            </form>
            {(text.length > 0 || hasUsers) && (
                <button className="btn btn-light btn-block" onClick={clear}>Clear</button>
            )}
        </div>
    );
};

/**
 * Proptypes validation definition
 * @type {{text: *}}
 */
Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    hasUsers: PropTypes.bool.isRequired,
    showAlert: PropTypes.func.isRequired,
};

export default Search;