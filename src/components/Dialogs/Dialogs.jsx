import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './Dialogs.module.css';

const Dialogs = () => {
    
    return (
        <dialogs className = {d.dialogs}>

        <div className = {d.dialogs}>

            <div className = {d.dialogsItems}>

                <div className = {d.dialog + ' ' + d.active} >
                   <NavLink to = '/dialogs/1'>Jeck</NavLink> 
                </div>
                <div className = {d.dialog}>
                <NavLink to = '/dialogs/2'>Nick</NavLink>
                </div>
                <div className = {d.dialog}>
                <NavLink to = '/dialogs/3'>Aleksandr</NavLink>
                </div>
                <div className = {d.dialog}>
                <NavLink to = '/dialogs/4'>Make</NavLink>
                </div>
            </div>
            
            <div className = {d.messages}>

                <div className = {d.dialog}>Hi</div>
                <div className = {d.dialog}>Hey</div>
                <div className = {d.dialog}>Hello</div>

            </div>
        </div>
      </dialogs>
    )
}

export default Dialogs;