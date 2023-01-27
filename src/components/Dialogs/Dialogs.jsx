import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import d from './Dialogs.module.css';
import MessageItem from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/messagesReducer";

const Dialogs = (props) => {

     let state = props.messages;
     let dialogsElements = state.dialogsData.map(d => <DialogItem name = {d.name} id = {d.id}/>)
     let messagesElements = state.messagesData.map(m => <MessageItem message = {m.message}/>)
     let newMessageBody = state.newMessageText
     let onSendMessageClick = () => {
         props.sendMessage();
     }
     let onNewMessageChange = (e) => {
         let body = e.target.value;
         updateNewMessageBodyCreator(body)
     }
    return (
        <div className = {d.dialogs}>
            <div className = {d.dialogsItems}>
                {dialogsElements}
            </div>
            <div className = {d.dialogsItems}>
                <div>{messagesElements}</div>
                <div>
                        <textarea value = { newMessageBody }
                                  onChange = { onNewMessageChange }
                                  placeholder = 'Enter your message' >
                        </textarea>

                    <div>
                        <button
                            onClick = { onSendMessageClick }>
                            Send
                        </button>
                        </div>
                    </div>
                </div>
            </div>
      )    
}

export default Dialogs;