import Users from "./Users";
import {connect} from "react-redux";
import {followAC, onSetCurrentPageAC, onSetTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setCurrentPage: (pageNumber) => dispatch(onSetCurrentPageAC(pageNumber)),
    setTotalUsersCount: (totalUsersCount) => dispatch(onSetTotalUsersCountAC(totalUsersCount))
  }
}

// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
// export default UsersContainer;
export default connect(mapStateToProps, mapDispatchToProps)(Users)