import * as types from '../actions/actionTypes';

const initialStore = {
    repos: [],
    searched: '',
    total_count: 0,
    page_number: 1,
    isLoading: false,
    err: null
}

const reducer = (state=initialStore, action) => {
    switch(action.type){
        case types.FETCH_REPOSITORIES:
            return {
                ...state,
                isLoading: false,
                repos: action.repos,
                total_count: action.total_count,
                err: null
            }
        case types.FETCHING:
            return {
                ...state,
                isLoading: true,
            }
        case types.UPDATE_SEARCH:
            return {
                ...state,
                err: null,
                searched: action.searched
            }
        case types.UPDATE_PAGE:
            return {
                ...state,
                page_number: action.page_number,
                err: null
            }
        case types.FETCH_FAILED:
            return {
                ...state,
                isLoading: false,
                err: action.err,
                repos: []
            }
        default:
            return state;
    }
}

export default reducer;

