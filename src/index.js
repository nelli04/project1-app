import './index.css';
import { rerenderEntireTree } from './render/render';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from './../redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {    
  root.render(
    <React.StrictMode>
      <App state = {state} addPost = {addPost} updateNewPostText = {updateNewPostText}/>
    </React.StrictMode>
  );
  }
rerenderEntireTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
