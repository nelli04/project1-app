import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (      
      <div className={s.item}>
        
        <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT42STwjfKg1x3AmsXTwpXHV6DmN-ZfGoJp1A&usqp=CAU' alt = ''/>
        {props.message}

        <div>
        <span>Like</span>
        </div>

      </div>
  )
}

export default Post;