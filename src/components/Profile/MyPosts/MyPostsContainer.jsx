import React from "react";
import {addPostAC, updateNewPostAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

  const state = props.store.getState().profilePage
  const addPost = () => {
    props.store.dispatch(addPostAC());
  }

  const onPostChange = (text) => {
    props.store.dispatch(updateNewPostAC(text));
  }

  return <MyPosts addPost={addPost}
                  updateNewPostText={onPostChange}
                  newPostText={state.newPostText}
                  posts={state.posts}/>
}

export default MyPostsContainer;