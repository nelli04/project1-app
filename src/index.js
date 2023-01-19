import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  {id: 1,  message: 'Hi', likesCount: 10},
  {id: 2, message: 'Hello', likesCount: 10}
]

let dialogsData = [
  {id: 1,  name: 'Jeck'},
  {id: 2, name: 'Nick'},
  {id: 3, name: 'Aleksandr' }, 
  {id: 4, name: 'Mike'}
] 

let messagesData =  [
  {id: 1,  message: 'Hi'},
  {id: 2, message: 'Hello'},
  {id: 3, message: 'Hey' }, 
  {id: 4, message: 'Yo'}     
]  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postData = {postData} dialogsData = {dialogsData} messagesData = {messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
