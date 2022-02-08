import classes from "./MyPost.module.css";
import Post from "./Post/Post";

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
        <Post message="How are you?" likes="5"/>
        <Post message="I'm fine" likes="6"/>
        <Post message="Well done!" likes="7"/>
      </div>

    </div>
  );
}

export default MyPosts;