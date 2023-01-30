const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 1, message: 'Hi', likesCount: 10},
        {id: 2, message: 'Hello', likesCount: 10}
    ],
    newPostText: ''
}
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;

    }
}
export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})
export default UserReducer;