import React from 'react';
import p from './Profile.module.css';
import ProfileItems from './ProfileItems/ProfileItems';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
    <profile className = {p.profile}>

    <div >
      <ProfileItems />
      <MyPostsContainer store = {props.store} /*postData = {props.profile.postData}
               newPostText = {props.profile.newPostText}
               dispatch = {props.dispatch}*//>
    </div>
  </profile>
  )
}

export default Profile;