const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POS_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

let store = {
   _state: {
    profile: {
        postData: [
            {id: 1,  message: 'Hi', likesCount: 10},
            {id: 2, message: 'Hello', likesCount: 10}
        ],
        newPostText: ''
    },
    messages: {
        messagesData: [
        {id: 1,  message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Hey' }, 
        {id: 4, message: 'Yo'}     
      ],
        dialogsData:  [
            {id: 1,  name: 'Jack'},
            {id: 2, name: 'Nick'},
            {id: 3, name: 'Aleksandr' }, 
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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profile.newPostText,
        likesCount: 10
      };
      this._state.profile.postData.push(newPost);
      this._state.profile.newPostText = '';
      this._rerenderEntireTree(this._state);
    } else if (action.type === UPDATE_NEW_POS_TEXT) {
      this._state.profile.newPostText = action.newText;
      this._rerenderEntireTree(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        this._state.messages.newMessageText = action.newText;
        this._rerenderEntireTree(this._state);
    } else if (action.type === SEND_MESSAGE) {
        let messageBody = this._state.messages.newMessageText
        this._state.messages.newMessageText = '';
        this._state.messages.push({id: 3,  message: messageBody})
        this._rerenderEntireTree(this._state);
  }
}

export const sendMessageCreator = (text) => ({
    type : 'UPDATE-NEW-MESSAGE-TEXT', newText: text
})

export const updateNewMessageBodyCreator = (text) => ({
    type : 'UPDATE-NEW-MESSAGE-TEXT', newText: text })

export const addPostActionCreator = () => ({
        type: 'ADD-POST'
})

export const updateNewPostActionCreator = (text) => ({
        type: 'UPDATE-NEW-POST-TEXT', newText: text
})

export default store;