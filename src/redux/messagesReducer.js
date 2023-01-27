const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.messageBody;
            return state;
        case SEND_MESSAGE:
            let messageBody = state.newMessageText
            state.newMessageText = '';
            state.messagesData.push({id: 6, message: messageBody})
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type : 'SEND_MESSAGE'})
export const updateNewMessageBodyCreator = (messageBody) => ({
    type : UPDATE_NEW_MESSAGE_TEXT, messageBody: messageBody })
export default messagesReducer;