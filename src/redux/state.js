import { rerenderEntireTree } from "../render/render";

  let state = {

    profile: {
        postData: [
            {id: 1,  message: 'Hi', likesCount: 10},
            {id: 2, message: 'Hello', likesCount: 10}
        ], 
        
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
  }

export let addPost = (postMessage) => {

  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };
  state.profile.postData.push(newPost);
  rerenderEntireTree(state);
}


export default state;
