const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const initialState = {
  posts: [
    {id: 1, message: 'How are you, dude?!', likesCount: 10},
    {id: 2, message: 'I\'m fine', likesCount: 11},
    {id: 3, message: 'Well done!', likesCount: 12}
  ],
  newPostText: 'enter post'
}
const profileReducer = (state = initialState, action) => {

  const copyState = {...state}

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 1
      }
      copyState.posts.push(newPost);
      copyState.newPostText = '';
      return copyState; }
    case UPDATE_NEW_POST_TEXT: {
      copyState.newPostText = action.newText;
      return copyState
    }
    default:
      return copyState;
  }
}

export const addPostAC = () => ({type: ADD_POST});
export const updateNewPostAC = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;