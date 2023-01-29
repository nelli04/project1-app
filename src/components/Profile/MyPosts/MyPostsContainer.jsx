import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

/*const MyPostsContainer = () => {
    debugger;
    //let state = props.store.getState();
    /!*let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let onPostChange = (text) => {
        let action = updateNewPostActionCreator(text);
        props.store.dispatch(action);
    }*!/
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }
                    let onPostChange = (text) => {
                        let action = updateNewPostActionCreator(text);
                        store.dispatch(action);
                    }
                    return (<MyPosts updateNewPostText={onPostChange}
                                     addPost={addPost}
                                     postData={state.profile.postData}
                                     newPostText={state.profile.newPostText}/>)
                }
            }
        </StoreContext.Consumer>
    )
}*/

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