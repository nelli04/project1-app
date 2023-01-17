import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postData = [
    {id: 1,  message: 'Hi', likesCount: 10},
    {id: 2, message: 'Hello', likesCount: 10}
]

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
        <Post message = {postData[0].message} likesCount = {postData[0].likesCount} />
        <Post message = {postData[1].message} likesCount = {postData[1].likesCount}/>
      </div>

    </div>
  )
}

export default MyPosts;