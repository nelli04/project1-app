import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter} from "react-router-dom"
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import MyPosts from './components/Profile/MyPosts/MyPosts';



const App = ()  => {

  let postData = [
    {id: 1,  message: 'Hi', likesCount: 10},
    {id: 2, message: 'Hello', likesCount: 10}
]

  return (
    <BrowserRouter>
    <div className = 'app-wrapper'>
      <Header />
      <Navbar /> 
      <div className = 'app-wrapper-content'>
        <Routes>
        <Route path = '/dialogs' element = {<Dialogs/>}/>
        <Route path = '/profile' element = {<Profile/>}/>
        <Route path = '/header' element = {<Header/>}/>
        <Route path = '/music' element = {<Music/>}/>
        <Route path = '/news' element = {<News/>}/>
        <Route path = '/settings' element = {<Settings/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>

    
  )
}

export default App;
