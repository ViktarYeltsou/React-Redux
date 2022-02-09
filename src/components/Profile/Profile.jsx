import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={classes.content}>
      <ProfileInfo/>
      <MyPosts postsData={props.state.posts}
               addPost={props.addPost}
               newPostText={props.state.newPostText}
               updateNewPostText={props.updateNewPostText}/>
    </div>
  )
}
export default Profile;
