import React from 'react';
import c from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
 
  let postElement = props.postData.map(p => <Post message = {p.message} likesCount = {p.likesCount} />) 
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text)
    props.updateNewPostText('')
  }
  
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

    return (
    <div >
      <div className = {c.MyPosts}>
      <h3 >My Posts</h3>
      </div>
    <div>

        <div className = {c.text}>
          <textarea onChange = {onPostChange} ref = {newPostElement} value = {props.newPostText}/>
        </div>

        <div>
          <button className  = {c.botton} onClick = {addPost}>Отправить</button>
        </div>

      </div>
      <div className = {c.posts}>
           {postElement}
      </div>
    </div>
  )
}

export default MyPosts;