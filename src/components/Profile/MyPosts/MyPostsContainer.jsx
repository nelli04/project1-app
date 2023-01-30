import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapObjState = (state) => {
    return {
        postData: state.profile.postData,
        newPostText: state.profile.newPostText
    }
}

let mapObjDispatch = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        },
    }
}


const MyPostsContainer = connect(mapObjState, mapObjDispatch)(MyPosts)

export default MyPostsContainer;