import * as types from './actionTypes';
import axios from 'axios';

export const fetchedRepositories = (repos,total_count) => {
    return {
        type: types.FETCH_REPOSITORIES,
        repos,
        total_count
    }
}

export const fetchingRepositories = ()=> {
    return {
        type: types.FETCHING
    }
}

export const updateSearchText = (searched) => {
    return {
        type: types.UPDATE_SEARCH,
        searched
    }
}

export const updatePage = (page_number) => {
    return {
        type: types.UPDATE_PAGE,
        page_number
    }
}

export const fetchFailed = (err) => {
    return {
        type: types.FETCH_FAILED,
        err
    }
}

export const fetchRepositories = (search, page = 1) => {
    return dispatch => {
        dispatch(fetchingRepositories());
        axios.get(`https://api.github.com/search/repositories?q=${search?`language: ${search}`:`forks:>1`}&page=${page}&per_page=20&sort=forks&order=desc`)
            .then( repos => {
                let result = repos.data.items;
                let total_count = repos.data.total_count;
                dispatch(fetchedRepositories(result,total_count));
            })
            .catch( e => {
                dispatch(fetchFailed(e.message));
            });
    }
}