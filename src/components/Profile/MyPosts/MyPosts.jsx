import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
    <div>
      my post
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className = {c.posts}>
        <Post message = 'Hello'/>
        <Post message = 'Hi' />
      </div>
    </div>
  )
}

export default MyPosts;