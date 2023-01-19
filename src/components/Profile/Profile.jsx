import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import p from './Profile.module.css';
import ProfileItems from './ProfileItems/ProfileItems';

const Profile = (props) => {

  let postData = [
    {id: 1,  message: 'Hi', likesCount: 10},
    {id: 2, message: 'Hello', likesCount: 10}
]
     
    return (
    <profile className = {p.profile}>
    <div >
      <ProfileItems />
      <MyPosts postData = {postData}/>
  </div>

  </profile>
  )
}

export default Profile;