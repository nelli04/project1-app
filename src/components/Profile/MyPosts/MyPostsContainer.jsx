import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let stateOne = props.store.getState()
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
             post = {props.profile.postData}
             newPost = {props.state.profile.newPostText}/>
  )
}

export default MyPostsContainer;