import React from 'react';
import SearchForm from './SearchForm';
import './App.css';
import RepositoryList from './RepositoryList';

function App() {
  return (
    <div className="App">
      <SearchForm />
      <RepositoryList />
    </div>
  );
}

export default App;
