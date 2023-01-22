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

  rerenderEntireTree() {
    console.log('');
  },

   addPost () {

    let newPost = {
      id: 5,
      message: this._state.profile.newPostText,
      likesCount: 0
    };
    this._state.profile.postData.push(newPost);
    this._state.profile.newPostText = '';
    this._rerenderEntireTree(state);
  },

   updateNewPostText(newText) {

  state.profile.newPostText = newText;
  this._rerenderEntireTree(state);
},
   subscribe (observer) {
  rerenderEntireTree = observer;
}
}

export default store;