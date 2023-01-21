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

const App = (props)  => {

  return (
    <BrowserRouter>
    <div className = 'app-wrapper'>
      <Header />
      <Navbar /> 
      <div className = 'app-wrapper-content'>
        <Routes>
        <Route path = '/dialogs' element = {<Dialogs state = {props.state.messages}/>}/>
        <Route path = '/profile' element = {<Profile profile = {props.state.profile} addPost = {props.addPost} />}/>
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
