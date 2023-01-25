import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import p from './Profile.module.css';
import ProfileItems from './ProfileItems/ProfileItems';

const Profile = (props) => {
    return (
    <profile className = {p.profile}>

    <div >
      <ProfileItems />
      <MyPosts postData = {props.profile.postData}
               newPostText = {props.profile.newPostText}
               newMessageText = {props.profile.newMessageText}
               dispatch = {props.dispatch}/>
    </div>

  </profile>
  )
}

export default Profile;