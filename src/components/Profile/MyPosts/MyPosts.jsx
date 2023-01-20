import React from 'react';
import c from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
 
  let postElement = props.postData.map(p => <Post message = {p.message} likesCount = {p.likesCount} />) 

  let addPost = () => {
    alert('Hello, my Friend!')
  }

    return (
    <div>
      <h3>My Posts</h3>
    <div>

        <div>
          <textarea></textarea>
        </div>

        <div>
          <button onClick = {addPost}>Отправить</button>
        </div>

      </div>
      <div className = {c.posts}>
        {postElement}
      </div>
    </div>
  )
}

export default MyPosts;