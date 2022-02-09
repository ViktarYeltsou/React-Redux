import classes from "./MyPost.module.css";
import Post from "./Post/Post";
import React from "react";


// const postsData = [
//   {id: 1, message: 'How are you, dude?!', likesCount: 10},
//   {id: 2, message: 'I\'m fine', likesCount: 11},
//   {id: 3, message: 'Well done!', likesCount: 12}
// ];
// const postsElements = postsData.map(el => (<Post message={el.message} likes={el.likesCount}/>));

const MyPosts = (props) => {
  const postsElements = props.postsData.map(el => (<Post message={el.message} likes={el.likesCount}/>));

  const newPostElement = React.createRef();

  const addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
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