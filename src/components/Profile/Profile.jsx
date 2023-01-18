import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import p from './Profile.module.css';
import ProfileItems from './ProfileItems/ProfileItems';
import Post from './MyPosts/Post/Post';
import c from './MyPosts/MyPosts.module.css'

const Profile = () => {

  let postData = [
    {id: 1,  message: 'Hi', likesCount: 10},
    {id: 2, message: 'Hello', likesCount: 10}
]

let postElement = postData.map(p => <Post message = {p.message} likesCount = {p.likesCount} />) 
     
    return (
    <profile className = {p.profile}>
    <div >
      <ProfileItems />
      <MyPosts posts = {postElement}/>
  </div>

    <div className = {c.posts}>
        {postElement}
      </div>
  </profile>
  )
}

export default Profile;