import React, {useReducer} from 'react';
import axios from 'axios';
import UserContext from './UserContext';
import UserReducer from './UserReducer';
import {SET_LOADING, GET_USER, GET_REPOS} from '../types';

const UserState = props => {
    const initialState = {
        user: null,
        loading: false,
        repos: [],
    };

    const [state, dispatch] = useReducer(UserReducer, initialState);

    /**
     * Busca um usuário
     * @param login
     * @returns {Promise<void>}
     */
    const getUser = async (login) => {
        setLoading();

        try {
            const res = await axios.get(`https://api.github.com/users/${login}` +
                `?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}` +
                `&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
            dispatch({type: GET_USER, payload: res.data})
        } catch (e) {
            dispatch({type: GET_USER, payload: null})
        }
    };

    /**
     * Busca os repositórios do usuário
     * @param login
     * @returns {Promise<void>}
     */
    const getUserRepos = async (login) => {
        setLoading();

        try {
            const res = await axios.get(`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc` +
                `&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}` +
                `&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
            dispatch({type: GET_REPOS, payload: res.data})
        } catch (e) {
            dispatch({type: GET_REPOS, payload: []})
        }
    };

    /**
     * Adiciona o loading
     */
    const setLoading = () => dispatch({type: SET_LOADING});

    return <UserContext.Provider value={{
        user: state.user,
        loading: state.loading,
        repos: state.repos,
        getUser,
        getUserRepos,
    }}>
        {props.children}
    </UserContext.Provider>
};

export default UserState;