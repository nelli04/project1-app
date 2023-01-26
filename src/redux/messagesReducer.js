const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'
const messagesReducer = (state, action) => {
     if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.messageBody;
    } else if (action.type === SEND_MESSAGE) {
        let messageBody = state.newMessageText
        state.newMessageText = '';
        state.messagesData.push({id: 6, message: messageBody})
    }
    return state;
}
export default messagesReducer;