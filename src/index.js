import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {    
  root.render(
    <React.StrictMode>
      <App state = {store._state} addPost = {store.addPost} updateNewPostText = {store.updateNewPostText}/>
    </React.StrictMode>
  );
  }
rerenderEntireTree(store._state);

sabscribe(store.rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
