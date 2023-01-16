import React from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom"
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';

import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


const App = (props)  => {
  return (
    
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
    
  )
}

export default App;