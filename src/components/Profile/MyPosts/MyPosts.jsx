import classes from "./MyPost.module.css";
import Post from "./Post/Post";


const postsData = [
  {id: 1, message: 'How are you?!', likesCount: 10},
  {id: 2, message: 'I\'m fine', likesCount: 11},
  {id: 3, message: 'Well done!', likesCount: 12}
];

const MyPosts = () => {
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea name="" id="" cols="30" rows="1"></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        <Post message={postsData[0].message} likes={postsData[0].likesCount}/>
        <Post message={postsData[1].message} likes={postsData[1].likesCount}/>
        <Post message={postsData[2].message} likes={postsData[2].likesCount}/>
      </div>

    </div>
  );
}

export default MyPosts;