import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './Dialogs.module.css';

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className = {d.dialog + ' ' + d.active} >
                   <NavLink to={path}>
                    {props.name}
                   </NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className = {d.dialog}>
            {props.message}
        </div>
    )
}

 
const Dialogs = () => {


    let dialogsData = [

       {id: 1,  name: 'Jeck'},
       {id: 2, name: 'Nick'},
       {id: 3, name: 'Aleksandr' }, 
       {id: 4, name: 'Mike'}
 ] 
    
 let dialogsElements = dialogsData.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id} />)
 
 [

                <DialogItem name = {dialogsData[0].name} id = {dialogsData[0].id} />,
                <DialogItem name = {dialogsData[1].name} id = {dialogsData[1].id} />,
                <DialogItem name = {dialogsData[2].name} id = {dialogsData[2].id} />,
                <DialogItem name = {dialogsData[3].name} id = {dialogsData[3].id} />
 ]

let messagesData = [

       {id: 1,  message: 'Hi'},
       {id: 2, message: 'Hello'},
       {id: 3, message: 'Hey' }, 
       {id: 4, message: 'Yo'}
 ]
   
    return (

        <div className = {d.dialogs}>

            <div className = {d.dialogsItems}>
                {dialogsElements}                
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