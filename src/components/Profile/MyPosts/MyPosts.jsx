import classes from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={classes.posts}>
      My posts
      <div>
        <textarea name="" id="" cols="30" rows="1"></textarea>
        <button>Add post</button>
      </div>
      <Post/>
      <Post/>
      <Post/>

    </div>
  );
}

export default MyPosts;