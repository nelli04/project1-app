import React from 'react';
import pro from './ProfileItems.module.css';

const ProfileItems = () => {
     
    return (
    <div >
    <div className = {pro.container}>
    <img className = {pro.img} src = 'https://img.freepik.com/premium-vector/doodle-face-avatar-for-social-media-line-art-people-face-isolated-on-white-background_559729-359.jpg' alt='' />
    <div className = {pro.overlay}>
      @username
    </div>
    </div>
    
    <div className = {pro.ava}>
      @username
    </div>
  </div>
  )
}

export default ProfileItems;