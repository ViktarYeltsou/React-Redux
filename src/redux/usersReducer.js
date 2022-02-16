const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
  users: [
    {id: 1, userUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7S86HLw3FSPP3Iflpfq1OkfEfkB8zdRGpw&usqp=CAU',
      followed: true, userName: 'Artem', userStatus: 'status', location: {cityName: 'Minsk', country: 'Belarus'}},
    {id: 2, userUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7S86HLw3FSPP3Iflpfq1OkfEfkB8zdRGpw&usqp=CAU',
      followed: false, userName: 'Sergey', userStatus: 'status', location: {cityName: 'Vilnus', country: 'Lithuania'}},
    {id: 3, userUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7S86HLw3FSPP3Iflpfq1OkfEfkB8zdRGpw&usqp=CAU',
      followed: true, userName: 'Andrey', userStatus: 'status', location: {cityName: 'Brest', country: 'Belarus'}},

  ]
}

const usersReducer = (state = initialState, action) => {
  debugger
  switch (action.type) {
    case FOLLOW:
      // return {...state, users: state.users.map( u => u.id === action.userId ? {...u, followed: true} : u)} /// переписать на if
      return {
        ...state,
        users: state.users.map( u => {
          if (u.id === action.userId) {
            return { ...u, followed: true}
          }
          return u
        })
      }
    case UNFOLLOW:
      // return {...state, users: state.users.map( u => u.id === action.userId ? {...u, followed: false} : u)}
      return {
        ...state,
        users: state.users.map( u => {
          if (u.id === action.userId) {
            return { ...u, followed: false}
          }
          return u
        })
      }
      case SET_USERS:
      return {...state, users: [...state.users, ...action.users]} //склейка массивов

    default:
      return state;
  }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;