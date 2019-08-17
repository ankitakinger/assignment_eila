import React from 'react';
import { connect } from 'react-redux';
import TopRepositories from './TopRepositories';
import Pages from './Pages';

const RepositoryList = (props) => {
    return (
        <div>
            {
                props.isLoading ?
                    <div className="message loading-message">Loading...</div>
                    :
                    props.err ? <h2 className="Danger">No results found!!!</h2> :
                        <div>
                            {
                                props.repos.length !== 0 &&
                                <div>
                                    <div className="message results-message">{props.total_count} results found!</div>
                                    {
                                        props.repos.map((repo, index) => (
                                            <TopRepositories key={index} topRep={repo} />
                                        ))
                                    }
                                    <Pages />
                                </div>
                            }
                        </div>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        repos: state.repos,
        isLoading: state.isLoading,
        total_count: state.total_count,
        err: state.err
    }
}

export default connect(mapStateToProps)(RepositoryList);