import React from 'react';
import c from './MyPosts.module.css'
import postData from './../../../App'

const MyPosts = (props) => {

  let postElement = postData.map(p => <Post message = {p.message} likesCount = {p.likesCount} />) 

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
        {postElement}
      </div>
    </div>
  )
}

export default MyPosts;