import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";

const mapStateToProps = (state) => {
  return state.usersPage
}
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users))
  }
}

// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
// export default UsersContainer;
 export default connect(mapStateToProps, mapDispatchToProps)(Users)