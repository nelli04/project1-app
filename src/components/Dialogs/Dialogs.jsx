import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import d from './Dialogs.module.css';
import MessageItem from './Message/Message';
 
const Dialogs = (props) => {

     let dialogsElements = props.state.dialogsData.map(d => <DialogItem name = {d.name} id = {d.id}/>)
     let messagesElements = props.state.messagesData.map(m => <MessageItem message = {m.message}/>)
     let newMessages = React.createRef();

     let textMessages = () => {
        let text = newMessages.current.value;
        props.textMessages(text)
     }

     let onChangeMessage = () => {

     }

    return (
        <div className = {d.dialogs}>
            <div className = {d.dialogsItems}>
                {dialogsElements}                
            </div>

        <div className = {d.messageText}>
            <textarea onChange = {onChangeMessage} ref = {newMessages}></textarea>
            </div>

            <div className = {d.bottonText}>
            <button onClick = {textMessages}>Отправить</button>
            </div>

            <div className = {d.messagesItems}>
                {messagesElements}
            </div>
        </div>     
      )    
}

export default Dialogs;