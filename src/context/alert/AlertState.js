import React, {useReducer} from 'react';
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';
import {SET_ALERT, REMOVE_ALERT} from '../types';

const AlertState = props => {
    const initialState = null;
    const [state, dispatch] = useReducer(AlertReducer, initialState);

    /**
     * Set the alert state
     * @param message
     * @param type
     */
    const setAlert = (message, type) => {
        if (message === null) {
            dispatch({type: REMOVE_ALERT});
            return;
        }

        dispatch({type: SET_ALERT, payload: {message: message, type: type}});
        setTimeout(() => dispatch({type: REMOVE_ALERT}), 5000);
    };

    return <AlertContext.Provider value={{
        alert: state,
        setAlert,
    }}>
        {props.children}
    </AlertContext.Provider>
};

export default AlertState;