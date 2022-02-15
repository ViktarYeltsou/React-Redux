import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={classes.content}>
      <ProfileInfo/>
      <MyPostsContainer store={props.store}
               //  postsData={props.state.posts}
               // newPostText={props.state.newPostText}
               // dispatch={props.dispatch}
      />
    </div>
  )
}
export default Profile;
