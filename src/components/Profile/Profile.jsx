import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={classes.content}>
      <ProfileInfo/>
      <MyPosts postsData={props.state.posts}
               newPostText={props.state.newPostText}
               // addPost={props.addPost}
               // updateNewPostText={props.updateNewPostText}
               dispatch={props.dispatch}/>
    </div>
  )
}
export default Profile;
