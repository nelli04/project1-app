const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    users: [
        {
            id: 1, name: 'Nelli', status: 'good', location: {
                city: 'Msk',
                country: 'Russia'
            }
        },
        {
            id: 2, name: 'Vik', status: 'good', location: {
                city: 'Msk',
                country: 'Russia'
            }
        }
    ]
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