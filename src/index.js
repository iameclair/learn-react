/*writing the first component from scratch*/
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
import {YOUTUBE_API} from './config/config'

/*this is an API key*/
const API_KEY = YOUTUBE_API.api_key;


const App = () => {
  /*const declares a final variable or a constant*/
  return (
    <div>
      <SearchBar/>
    </div>
  )
    /*JSX looks like html but cannot be interpreted by the browser but it is transformed into js*/
};

/*generate html and put it in the dom*/
ReactDOM.render(<App/>, document.querySelector('.container'));