import React from 'react';
import ProTypes from 'prop-types';

const Navbar = ({brandIcon, title}) => {
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={brandIcon}/> {title}
            </h1>
        </nav>
    );
};

Navbar.defaultProps = {
    title: 'Github Finder',
    brandIcon: 'fab fa-github',
};

Navbar.propTypes = {
    title: ProTypes.string.isRequired,
    brandIcon: ProTypes.string.isRequired,
};

export default Navbar;