import React, {useContext} from 'react';
import AlertContext from '../../context/alert/AlertContext';

/**
 * Alert Component
 * @returns {*}
 * @constructor
 */
const Alert = () => {

    const {alert} = useContext(AlertContext);

    return (
        alert != null && (
            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle"></i> {alert.message}
            </div>
        )
    );
};

export default Alert;