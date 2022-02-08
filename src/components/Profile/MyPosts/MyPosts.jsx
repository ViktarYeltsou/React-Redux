import classes from "./MyPost.module.css";
import Post from "./Post/Post";


// const postsData = [
//   {id: 1, message: 'How are you, dude?!', likesCount: 10},
//   {id: 2, message: 'I\'m fine', likesCount: 11},
//   {id: 3, message: 'Well done!', likesCount: 12}
// ];
// const postsElements = postsData.map(el => (<Post message={el.message} likes={el.likesCount}/>));

const MyPosts = (props) => {
  const postsElements = props.postsData.map(el => (<Post message={el.message} likes={el.likesCount}/>));
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea name="textarea" id="textarea0" cols="30" rows="1" value="empty">empty</textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;