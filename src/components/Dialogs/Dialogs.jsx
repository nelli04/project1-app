import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './Dialogs.module.css';

const DialogItem = (props) => {
    
    return (
        <div className = {d.dialog + ' ' + d.active} >
                   <NavLink to = {path}>
                    {props.name}
                   </NavLink> 
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <NavLink to = {d.dialog}>
            {props.message}
        </NavLink>
    )
}

 
const Dialogs = () => {
          let dialogsData = [
       {id: Jeck,  name: 'Jeck'},
       {id: Nick, name: 'Nick'},
       {id: Aleksandr, name: 'Aleksandr' }, 
       {id: Mike, name: 'Mike'}
 ] 
    
let messagesData = [
       {id: Jeck,  message: 'Hi'},
       {id: Nick, message: 'Hello'},
       {id: Aleksandr, message: 'Hey' }, 
       {id: Mike, message: 'Yo'}
 ]
   
    return (

        <div className = {d.dialogs}>

            <div className = {d.dialogsItems}>

                <DialogItem name = {dialogsData[0].name} id = {dialogsData[0].id} />
                <DialogItem name = {dialogsData[1].name} id = {dialogsData[1].id} />
                <DialogItem name = {dialogsData[2].name} id = {dialogsData[2].id} />
                <DialogItem name = {dialogsData[3].name} id = {dialogsData[3].id} />
                
            </div>

            
            <div className = {d.messagesItems}>

                <MessageItem message = {messagesData[0].message}/>
                <MessageItem message = {messagesData[1].message}/>
                <MessageItem message = {messagesData[2].message}/>
                <MessageItem message = {messagesData[3].message}/>

            </div>
        </div>
     
      )
    
}

export default Dialogs;