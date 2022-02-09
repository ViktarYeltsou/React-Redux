import classes from "./MyPost.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
  const postsElements = props.postsData.map(el => (<Post message={el.message} likes={el.likesCount}/>));

  const newPostElement = React.createRef();

  //addPost вызывает callback только для записи нового объекта (отображаемого текста) в state
  const addPost = () => {
    // props.addPost();
    props.dispatch({type: 'ADD-POST'});
  }

  //onPostChange вызывает callback только для передачи нового значения textarea в state
  const onPostChange = () => {
    let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} defaultValue={props.newPostText}/>
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