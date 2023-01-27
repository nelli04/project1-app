import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";

/*const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'*/

let store = {
    _state: {
        profile: {
            postData: [
                {id: 1, message: 'Hi', likesCount: 10},
                {id: 2, message: 'Hello', likesCount: 10}
            ],
            newPostText: ''
        },
        messages: {
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Hey'},
                {id: 4, message: 'Yo'}
            ],
            dialogsData: [
                {id: 1, name: 'Jack'},
                {id: 2, name: 'Nick'},
                {id: 3, name: 'Aleksandr'},
                {id: 4, name: 'Mike'}
            ],
            newMessageText: ''
        }
    },
    _rerenderEntireTree() {
        console.log('');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.messages = messagesReducer(this._state.messages, action);
        this._rerenderEntireTree(this._state);

    }
}


export default store;