import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import p from './Profile.module.css';
import ProfileItems from './ProfileItems/ProfileItems';

const Profile = () => {

  
     
    return (
    <profile className = {p.profile}>
    <div >
      <ProfileItems />
      <MyPosts />
  </div>

  </profile>
  )
}

export default Profile;