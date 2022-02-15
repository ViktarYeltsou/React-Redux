import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers(
  {
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer
  }
)

const store = createStore(reducers);

export default store;