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
      <Post message="How are you?" likes="5"/>
      <Post message="I'm fine" likes="6"/>
      <Post message="Well done!" likes="7"/>

    </div>
  );
}

export default MyPosts;