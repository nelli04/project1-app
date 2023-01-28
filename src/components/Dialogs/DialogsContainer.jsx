import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
     let stateOne = props.store.getState().messages;
     let onSendMessageClick = () => {
         props.store.dispatch(sendMessageCreator())
     }
     let onNewMessageChange = (body) => {
         props.store.dispatch(updateNewMessageBodyCreator(body))
     }
    return (
        <Dialogs update = {onNewMessageChange}
                 send = {onSendMessageClick}
                 messages = {stateOne} />
      )    
}

export default DialogsContainer;