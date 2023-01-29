const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 1, message: 'Hi', likesCount: 10},
        {id: 2, message: 'Hello', likesCount: 10}
    ],
    newPostText: ''
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 10
            };
            let stateOne = {...state};
            stateOne.postData = [...state.postData];
            stateOne.postData.push(newPost);
            stateOne.newPostText = '';
            return stateOne;
    }
        case UPDATE_NEW_POST_TEXT: {
            let stateTwo = [...state];
            stateTwo.newPostText = action.newText;
            return stateTwo;
        }
        default:
            return state;

    }
}
export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})
export default profileReducer;