import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  debugger;
  let state = props.store.getState().profile;
  let addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }
  let onPostChange = (text) => {
    let action = updateNewPostActionCreator(text);
    props.store.dispatch(action);
  }
    return <MyPosts updateNewPostText = {onPostChange}
             addPost = {addPost}
             postData = {state.profile.postData}
             newPostText = {state.profile.newPostText}/>

}

export default MyPostsContainer;