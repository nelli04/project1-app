import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let stateOne = props.store.getState().profile;
  let addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }
  let onPostChange = (text) => {
    let action = updateNewPostActionCreator(text);
    props.store.dispatch(action);
  }
    return (
    <MyPosts updateNewPostText = {onPostChange}
             addPost = {addPost}
             post = {stateOne.profile.postData}
             newPost = {stateOne.profile.newPostText}/>
  )
}

export default MyPostsContainer;