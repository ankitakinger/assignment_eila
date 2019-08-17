import React from 'react';
import { connect } from 'react-redux';
import { updatePage, fetchRepositories } from '../store/actions/actions';

const Pages = (props) => {

    const changePage = (page) => {
        props.updatePage(page);
        props.fetchRepositories(props.searched, page);
    }

    return (
        <div className="pages">
            <button
                disabled={props.page_number === 1 ? true : false}
                onClick={() => changePage(props.page_number - 1)}>Prev</button>
            <div>Page {props.page_number}</div>
            <button
                disabled={props.page_number === (props.total_count / props.repos.length) ? true : false}
                onClick={() => changePage(props.page_number + 1)}>Next</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        total_count: state.total_count,
        repos: state.repos,
        page_number: state.page_number,
        searched: state.searched
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updatePage: (page) => dispatch(updatePage(page)),
        fetchRepositories: (search,page) => dispatch(fetchRepositories(search,page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pages);