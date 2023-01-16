import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './Dialogs.module.css';

const DialogItem = (props) => {
    
    return (
        <div className = {d.dialog + ' ' + d.active} >
                   <NavLink to = {'/dialogs/' + props.id}>{props.name}</NavLink> 
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className = {d.dialog}>{props.message}</div>
    )
}

const Dialogs = () => {
    
    return (
        <dialogs className = {d.dialogs}>

        <div className = {d.dialogs}>

            <div className = {d.dialogsItems}>

                <DialogItem name = 'Jeck' id = 'Jeck' />
                <DialogItem name = 'Nick' id = 'Nick' />
                <DialogItem name = 'Aleksandr' id = 'Aleksandr' />
                <DialogItem name = 'Make' id = 'Make' />
                
            </div>

            
            <div className = {d.messages}>

                <MessageItem message = 'Hi'/>
                <MessageItem message = 'Hello'/>
                <MessageItem message = 'Hey'/>
                <MessageItem message = 'Yo'/>

            </div>
        </div>
      </dialogs>
    )
}

export default Dialogs;