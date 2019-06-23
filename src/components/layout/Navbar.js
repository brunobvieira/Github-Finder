import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

/**
 * Navbar component
 * @param brandIcon
 * @param title
 * @returns {*}
 * @constructor
 */
const Navbar = ({brandIcon, title}) => {
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={brandIcon}/> {title}
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

/**
 * Default props definition
 * @type {{title: string, brandIcon: string}}
 */
Navbar.defaultProps = {
    title: 'Github Finder',
    brandIcon: 'fab fa-github',
};

/**
 * Proptypes definition
 * @type {{title: *, brandIcon: *}}
 */
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    brandIcon: PropTypes.string.isRequired,
};

export default Navbar;