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
    let stateOne;

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            stateOne = {
                ...state,
                newMessageText: action.messageBody
            };
            return stateOne;
        }
        case SEND_MESSAGE: {
            let messageBody = state.newMessageText
            stateOne = {
                ...state,
                newMessageText: '',
                dialogsData: [...state.dialogsData, {id: 6, message: messageBody}]
            };
            return stateOne;
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: 'SEND_MESSAGE'})
export const updateNewMessageBodyCreator = (messageBody) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, messageBody: messageBody
})
export default messagesReducer;