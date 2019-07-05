import React, {Fragment, useState} from 'react';

import Search from "../user/Search";
import Users from "../user/Users";
import Alert from "../layout/Alert";

import HomeState from '../../context/home/HomeState'

const Home = () => {
    const [alert, setAlert] = useState(null);

    /**
     * Set the alert state
     * @param message
     * @param type
     */
    const showAlert = (message, type) => {
        if (message === null) {
            setAlert(null);
            return;
        }

        setAlert({message: message, type: type});
        setTimeout(() => setAlert(null), 5000);
    };

    return (
        <HomeState>
            <Fragment>
                <Alert alert={alert}/>
                <Search showAlert={showAlert}/>
                <Users/>
            </Fragment>
        </HomeState>
    );
};

export default Home;