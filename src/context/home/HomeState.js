import React, {useReducer} from 'react';
import axios from 'axios';
import HomeContext from './HomeContext';
import HomeReducer from './HomeReducer';
import {SEARCH_USERS, SET_LOADING, CLEAR_USERS} from '../types';

const HomeState = props => {
    const initialState = {
        users: [],
        loading: false,
    };

    const [state, dispatch] = useReducer(HomeReducer, initialState);

    /**
     * Search github users
     * @param query string
     * @returns {Promise<void>}
     */
    const searchUsers = async (query) => {
        setLoading();

        const res = await axios.get(`https://api.github.com/search/users?q=${query}&` +
            `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}` +
            `&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
    };

    /**
     * Aciona o loading
     */
    const setLoading = () => dispatch({type: SET_LOADING});

    /**
     * Limpa os usuarios
     */
    const clearUsers = () => dispatch({type: CLEAR_USERS});

    return <HomeContext.Provider value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        setLoading,
        clearUsers,
    }}>
        {props.children}
    </HomeContext.Provider>
};

export default HomeState;