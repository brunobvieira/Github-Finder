import React, {Fragment} from 'react';
import spinner from './spinner.gif';

/**
 * Spinner component
 * @returns {*}
 * @constructor
 */
const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner} alt="Loading..." style={style}/>
        </Fragment>
    );
};

/**
 * Style definition
 * @type {{margin: string, display: string, width: string}}
 */
const style = {
    width: '200px',
    display: 'block',
    margin: 'auto'
};

export default Spinner;