import React from 'react';
import pro from './ProfileItems.module.css';

const ProfileItems = () => {
     
    return (
    <profile className = {pro.profile}>
    <div >
    <div>
    <img className = 'img'src = 'https://img.freepik.com/premium-vector/doodle-face-avatar-for-social-media-line-art-people-face-isolated-on-white-background_559729-359.jpg' alt='' />
    </div>
    <div className = 'ava'>
      ava + discription
    </div>
  </div>
  </profile>
  )
}

export default ProfileItems;