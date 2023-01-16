import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter} from "react-router-dom"
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';

import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


const App = (props)  => {
  return (
    <BrowserRouter>
    <div className = 'app-wrapper'>
      <Header />
      <Navbar /> 
      <Profile /> 
      
      <div className = 'app-wrapper-content'>
        <Routes>
        <Route path = '/dialogs' element={<Dialogs/>}/>
        <Route path = '/profile' element = {<Profile/>}/>
        
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;