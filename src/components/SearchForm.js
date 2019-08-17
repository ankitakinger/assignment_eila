import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchRepositories, updateSearchText, updatePage} from '../store/actions/actions';

class SearchForm extends Component {

  search = (e) => {
    this.props.updateSearchText(e.target.value.trim());
  }

  callApi = (e) => {
    if(e.charCode === 13){
      this.updateRepos();
    }
  }

  updateRepos = () => {
    this.props.updatePage(1);
    this.props.fetchRepositories(this.props.searched, 1);
  }

  componentDidMount(){
    this.props.fetchRepositories();
  }

  render(){
    return (
        <div className="searchbox">
            <input 
              type="text" 
              placeholder="Search Repositories..." 
              value={this.props.searched}
              onChange={this.search}
              onKeyPress={this.callApi}
                />
            <button type="submit" onClick={() => this.updateRepos()}>Search</button>
        </div>
    );
  }
  }

const mapStateToProps = state => {
  return {
      repos: state.repos,
      page_number: state.page_number,
      err: state.err,
      searched: state.searched
  }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRepositories: (search, page) => dispatch(fetchRepositories(search,page)),
        updateSearchText: (search) => dispatch(updateSearchText(search)),
        updatePage: (page) => dispatch(updatePage(page))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchForm);