import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import d from './Dialogs.module.css';
import MessageItem from './Message/Message';
 
const Dialogs = () => {
    let dialogsData = [
       {id: 1,  name: 'Jeck'},
       {id: 2, name: 'Nick'},
       {id: 3, name: 'Aleksandr' }, 
       {id: 4, name: 'Mike'}
 ] 

    let messagesData =  [
       {id: 1,  message: 'Hi'},
       {id: 2, message: 'Hello'},
       {id: 3, message: 'Hey' }, 
       {id: 4, message: 'Yo'}     
 ]  

     let dialogsElements = dialogsData.map(d => <DialogItem name = {d.name} id = {d.id}/>)
     let messagesElements = messagesData.map(m => <MessageItem message = {m.message}/>)
   
     
    return (
        <div className = {d.dialogs}>
            <div className = {d.dialogsItems}>
                {dialogsElements}                
            </div>

            <div className = {d.messagesItems}>
                {messagesElements}
            </div>
        </div>     
      )    
}

export default Dialogs;