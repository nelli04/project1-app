import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

     let state = props.messages;
     let onSendMessageClick = () => {
         props.store.dispatch(sendMessageCreator())
     }
     let onNewMessageChange = (body) => {
         props.store.dispatch(updateNewMessageBodyCreator(body))
     }
    return (
        <Dialogs update = {onNewMessageChange}
                 send = {onSendMessageClick}
                 messages = {state} />
      )    
}

export default DialogsContainer;