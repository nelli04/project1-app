import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter} from "react-router-dom"
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';



const App = (props)  => {
  return (
    <BrowserRouter>
    <div className = 'app-wrapper'>
      <Header />
      <Navbar /> 
       
      
      <div className = 'app-wrapper-content'>
        <Routes>
        <Route path = '/dialogs' element={<Dialogs/>}/>
      
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;