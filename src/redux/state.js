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
  getState() {
    return this._state;
  },
  _rerenderEntireTree() {
    console.log('');
  },
   addPost () {
    let newPost = {
      id: 5,
      message: this._state.profile.newPostText,
      likesCount: 10
    };
    this._state.profile.postData.push(newPost);
    this._state.profile.newPostText = '';
    this._rerenderEntireTree(this._state);
  },
   updateNewPostText(newText) {
    this._state.profile.newPostText = newText;
    this._rerenderEntireTree(this._state);
  },
   subscribe(observer) {
    this._rerenderEntireTree = observer;
  }
}

export default store;