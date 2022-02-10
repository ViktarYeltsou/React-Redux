// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const ADD_MESSAGE = 'ADD-MESSAGE';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'How are you, dude?!', likesCount: 10},
        {id: 2, message: 'I\'m fine', likesCount: 11},
        {id: 3, message: 'Well done!', likesCount: 12}
      ],
      newPostText: 'enter post'
    },
    dialogPage: {
      dialogs: [
        {id: 1, name: 'Victor'},
        {id: 2, name: 'Archi'},
        {id: 3, name: 'Igor'},
        {id: 4, name: 'Andrey'},
        {id: 5, name: 'Artem'},
        {id: 6, name: 'GUEST'}
      ],
      messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo!Yo!'},
      ],
      newMessageText: 'enter message'
    }
  },
  _callSubsriber() {
    console.log('No subscribers')
  },
  getState() {
    return this._state;
  },
  subscriber(observer) {
    this._callSubsriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
    this._callSubsriber(this._state);
  }
}

export default store;
