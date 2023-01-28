import React from 'react';
import p from './Profile.module.css';
import ProfileItems from './ProfileItems/ProfileItems';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    debugger;
    return (
        <profile className={p.profile}>
            <div>
                <ProfileItems/>
                <MyPostsContainer/>
            </div>
        </profile>
    )
}

export default Profile;