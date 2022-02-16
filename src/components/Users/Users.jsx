import classes from "./Users.module.css";
import {followAC, unfollowAC} from "../../redux/usersReducer";

const Users = (props) => {

  return <div>
    {
      props.users.map(u =>
        <div key={u.id}>
          <span>
            <div>
              <img src={u.userUrl} alt="ava"/>
            </div>

            {u.followed
              ? <button onClick={unfollowAC}>Unfollow</button>
              : <button onClick={followAC}>Follow</button>}
          </span>
         <span>
           <span>
             <div>{u.userName}</div>
             <div>{u.userStatus}</div>
           </span>
           <span>
             <div>{u.location.cityName}</div>
             <div>{u.location.country}</div>
           </span>
         </span>
          <p>___</p>

        </div>
      )
    }

  </div>
}

export default Users;