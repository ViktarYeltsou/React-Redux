import classes from "./MyPost.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

  const postsElements = props.posts.map(el => (<Post message={el.message} likes={el.likesCount}/>));

  //addPost вызывает callback только для записи нового объекта (отображаемого текста) в state
  const addPostClick = () => {
    props.addPost();
  }

  //onPostChange вызывает callback только для передачи нового значения textarea в state
  const onPostChange = (element) => {
    let text = element.target.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPostClick}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;