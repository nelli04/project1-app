import React from 'react';
import pro from './ProfileItems.module.css';

const ProfileItems = () => {
     
    return (
    <profile className = {pro.profile}>
    <div >
    <div>
    <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBsbCAQtQimp5yI0Zx4vyR_FzPLUVzkdjDBN0N4_LAUo59inNQrSp6-Iz7qrfAXBENLGI&usqp=CAU' alt='' />
    </div>
    <div>
      ava + discription
    </div>
  </div>
  </profile>
  )
}

export default ProfileItems;