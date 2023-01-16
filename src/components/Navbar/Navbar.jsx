import React from 'react';
import { Link } from 'react-router-dom';
import n from './Navbar.module.css';

const Navbar = () => {
    return (
    <nav className = {n.nav}>
    <div className = {`${n.item}${n.active}`}>
      <Link to = '/profile' activeClassName = {n.activeLink}>Profile</Link>
    </div>
    <div className = {`${n.item}${n.active}`}>
      <Link to = '/dialogs' activeClassName = {n.activeLink}>Messages</Link>
    </div>
    <div className = {`${n.item}${n.active}`}>
      <Link to = 'news' activeClassName = {n.activeLink}>News</Link>
    </div>
    <div className = {`${n.item}${n.active}`}>
      <Link to = 'music' activeClassName = {n.activeLink}>Music</Link>
    </div>
    <div className = {`${n.item}${n.active}`}>
      <Link to = 'setting'activeClassName = {n.activeLink}>Settings</Link>
    </div>
  </nav>
    )
}


export default Navbar;