import React, {Fragment} from 'react';

import Search from "../user/Search";
import Users from "../user/Users";
import Alert from "../layout/Alert";

import HomeState from '../../context/home/HomeState';
import AlertState from '../../context/alert/AlertState';

const Home = () => (
    <HomeState>
        <Fragment>
            <AlertState>
                <Alert/>
                <Search/>
            </AlertState>
            <Users/>
        </Fragment>
    </HomeState>
);

export default Home;