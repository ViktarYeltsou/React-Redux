const state = {
  profilePage: {
    posts: [
      {id: 1, message: 'How are you, dude?!', likesCount: 10},
      {id: 2, message: 'I\'m fine', likesCount: 11},
      {id: 3, message: 'Well done!', likesCount: 12}
    ]
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
}

export default state;