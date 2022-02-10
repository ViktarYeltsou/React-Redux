
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 1
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubsriber(this._state);
      debugger;
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubsriber(this._state);
    } else if (action.type === 'ADD-MESSAGE'){
      let newMessage = {
        id: 6,
        message: this._state.dialogPage.newMessageText
      }
      this._state.dialogPage.messages.push(newMessage);
      this._state.dialogPage.newMessageText = '';
      this._callSubsriber(this._state);
      debugger;
    }
      else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT'){
      this._state.dialogPage.newMessageText = action.body;
      this._callSubsriber(this._state);
    }
  }
}

export const addPostAC = () => ({type: ADD_POST});
export const updateNewPostAC = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const addMessageAC = () => ({type: ADD_MESSAGE});
export const updateNewMessageAC = (body) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: body})


export default store;
