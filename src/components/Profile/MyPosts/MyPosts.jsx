import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
    <div>

      <h3>My Posts</h3>

      <div>

        <div>
        <textarea></textarea>
        </div>

        <div>
        <button>Add post</button>
        </div>

      </div>

      <div className = {c.posts}>
        <Post message = 'Hello'/>
        <Post message = 'Hi' />
      </div>

    </div>
  )
}

export default MyPosts;