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

  rerenderEntireTree() {
    console.log('');
  },

   addPost () {

    let newPost = {
      id: 5,
      message: state.profile.newPostText,
      likesCount: 0
    };
    state.profile.postData.push(newPost);
    state.profile.newPostText = '';
    rerenderEntireTree(state);
  }

}

export const updateNewPostText = (newText) => {

  state.profile.newPostText = newText;
  rerenderEntireTree(state);
}

export const sabscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;
