import React, {useState, useContext} from 'react';
import HomeContext from '../../context/home/HomeContext';
import AlertContext from '../../context/alert/AlertContext';

/**
 * Search form component
 */
const Search = () => {

    /**
     * Context
     */
    const homeContext = useContext(HomeContext);
    const alertContext = useContext(AlertContext);

    const {setAlert} = alertContext;
    const {clearUsers, users} = homeContext;

    const hasUsers = users.length > 0;
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
            setAlert('Please enter something', 'light');
            return;
        }

        homeContext.searchUsers(text);
        setAlert(null);
    };

    /**
     * Clear form and users
     */
    const clear = () => {
        setText('');
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

export default Search;