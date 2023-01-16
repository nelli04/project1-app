import React from 'react';
import p from './Profile.module.css';

const Profile = () => {
     
    return (
    <profile className={p.profile}>
    <div >
      <Profile />
    <div>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBsbCAQtQimp5yI0Zx4vyR_FzPLUVzkdjDBN0N4_LAUo59inNQrSp6-Iz7qrfAXBENLGI&usqp=CAU' alt='' />
    </div>
    <div>
      ava + discription
    </div>
   <MyPosts />
  </div>
  </profile>
  )
}

export default Profile;