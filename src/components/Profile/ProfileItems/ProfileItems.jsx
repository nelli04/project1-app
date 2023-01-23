import React from 'react';
import pro from './ProfileItems.module.css';

const ProfileItems = () => {
     
    return (
    <div >
    <div className = 'container'>
    <img className = {pro.img} src = 'https://img.freepik.com/premium-vector/doodle-face-avatar-for-social-media-line-art-people-face-isolated-on-white-background_559729-359.jpg' alt='' />
    </div>
    <div className = 'overlay'>
      @username
    </div>
    <div className = {pro.ava}>
      @username
    </div>
  </div>
  )
}

export default ProfileItems;