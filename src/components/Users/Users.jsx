import classes from "./Users.module.css";
import {followAC, unfollowAC} from "../../redux/usersReducer";
const Users = (props) => {

  return <div>
    {
      props.users.map( u =>
        <div key={u.id}>
          <div>
            <img src={u.userUrl} alt="ava"/>
            {u.followed
              ? <button onClick={unfollowAC}>Unfollow</button>
              : <button onClick={followAC}>Follow</button> }
          </div>
          <span>{' ' + u.userName}</span>
          <span>{' ' + u.location.cityName}</span>
          <span>{' ' + u.location.country}</span>
          <span>{' ' + u.userStatus}</span>
          <p>___</p>

        </div>
      )
    }

  </div>
}

export default Users;