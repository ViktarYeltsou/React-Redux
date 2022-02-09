import classes from "./MyPost.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
  const postsElements = props.postsData.map(el => (<Post message={el.message} likes={el.likesCount}/>));

  const newPostElement = React.createRef();

  const addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';

  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;