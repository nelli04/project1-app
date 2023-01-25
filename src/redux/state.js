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
            {id: 1,  name: 'Jeck'},
            {id: 2, name: 'Nick'},
            {id: 3, name: 'Aleksandr' }, 
            {id: 4, name: 'Mike'} 
        ]
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
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profile.newPostText,
        likesCount: 10
      };
      this._state.profile.postData.push(newPost);
      this._state.profile.newPostText = '';
      this._rerenderEntireTree(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profile.newPostText = action.newText;
      this._rerenderEntireTree(this._state);
    }
  }
}

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}

export const updateNewPostActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT', newText: text
    }
}

export default store;