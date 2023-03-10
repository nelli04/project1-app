import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapObjState = (state) => {
    return {
        messages: state.messages
    }
}
let mapObjDispatch = (dispatch) => {
    return {
        send: () => {
            dispatch(sendMessageCreator())
        },
        update: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}
const DialogsContainer = connect(mapObjState, mapObjDispatch)(Dialogs);
export default DialogsContainer;