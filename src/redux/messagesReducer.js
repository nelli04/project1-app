const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'
const messagesReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.messageBody;
            break;
        case SEND_MESSAGE:
            let messageBody = state.newMessageText
            state.newMessageText = '';
            state.messagesData.push({id: 6, message: messageBody})
            break;
    }
    return state;
}

export const sendMessageCreator = () => ({type : 'SEND_MESSAGE'})

export const updateNewMessageBodyCreator = (messageBody) => ({
    type : UPDATE_NEW_MESSAGE_TEXT, messageBody: messageBody })

export default messagesReducer;