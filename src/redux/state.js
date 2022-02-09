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
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubsriber() {
    console.log('No subscribers')
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 1
    }
    this._state.profilePage.posts.push(newPost);
    this.updateNewPostText('');
    this._callSubsriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubsriber(this._state);
  },
  subscriber(observer) {
    this._callSubsriber = observer;
  }
}
export default store;
//тут обязательно let, иак как мы будем ее переопределять через subscriber
// let renderEntireTree = () => {}
//
// const state = {
//   profilePage: {
//     posts: [
//       {id: 1, message: 'How are you, dude?!', likesCount: 10},
//       {id: 2, message: 'I\'m fine', likesCount: 11},
//       {id: 3, message: 'Well done!', likesCount: 12}
//     ],
//     newPostText: 'enter post'
//   },
//   dialogPage: {
//     dialogs: [
//       {id: 1, name: 'Victor'},
//       {id: 2, name: 'Archi'},
//       {id: 3, name: 'Igor'},
//       {id: 4, name: 'Andrey'},
//       {id: 5, name: 'Artem'},
//       {id: 6, name: 'GUEST'}
//     ],
//     messages: [
//       {id: 1, message: 'Hi!'},
//       {id: 2, message: 'How are you?'},
//       {id: 3, message: 'Yo!Yo!'},
//     ]
//   }
// }
//   //addPost - callback для записи нового поста в posts, очистки поля textarea и ререндера
// export const addPost = () => {
//   let newPost = {
//     id: 5,
//     message: state.profilePage.newPostText,
//     likesCount: 1
//   }
//   state.profilePage.posts.push(newPost);
//   updateNewPostText('');
//   renderEntireTree(state);
// }
// //updateNewPostText - callback для обновления поля textarea и ререндера
// export const updateNewPostText = (newText) => {
//   state.profilePage.newPostText = newText;
//   renderEntireTree(state);
// }
//
// export const subscriber = (observer) => {
//   renderEntireTree = observer;
// }
//
// export default state;