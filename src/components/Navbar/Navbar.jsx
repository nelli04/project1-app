import React from 'react';
import { Link } from 'react-router-dom';
import n from './Navbar.module.css';

const Navbar = () => {
    return (
    <nav className = {n.nav}>
    <div className = {n.item}>
      <Link to = '/profile' activeClassName = {n.activeLink}>Profile</Link>
    </div>
    <div className = {`${n.item}${n.active}`}>
      <Link to = '/dialogs'>Messages</Link>
    </div>
    <div className = {n.item}>
      <Link to = 'news'>News</Link>
    </div>
    <div className = {n.item}>
      <Link to = 'music'>Music</Link>
    </div>
    <div className = {n.item}>
      <Link to = 'setting'>Settings</Link>
    </div>
  </nav>
    )
}


export default Navbar;