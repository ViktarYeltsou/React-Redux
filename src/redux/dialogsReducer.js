const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 6,
        message: state.newMessageText
      }
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;
    }
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.body;
      return state;
    default:
      return state;
  }
}

export const addMessageAC = () => ({type: ADD_MESSAGE});
export const updateNewMessageAC = (body) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: body});

export default dialogsReducer;