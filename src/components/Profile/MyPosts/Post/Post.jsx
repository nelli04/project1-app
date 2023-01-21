import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (      
      <div className={s.item}>
        
        <img src = 'https://exploringbits.com/wp-content/uploads/2022/01/cat-pfp-5.jpg?ezimgfmt=rs:352x382/rscb3/ngcb3/notWebP' alt = ''/>
        {props.message}

        <div>
        <span>Like</span>
        </div>

      </div>
  )
}

export default Post;