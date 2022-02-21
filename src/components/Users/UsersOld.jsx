import classes from "./Users.module.css";
import axios from "axios";

const Users = (props) => {
  if (props.users.length === 0) {

    // const axios = require('axios');

    axios.get("http://localhost:5000/api/users").then(response => {
      console.log(response)
      props.setUsers(response.data)
    })
  }

  return <div>
    {
      props.users.map(u =>
        <div key={u.id}>
          <span>
            <div>
              <img src={u.userUrl} alt="ava" className={classes.userPhoto}/>
            </div>

            {u.followed
              ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              : <button onClick={() => props.follow(u.id)}>Follow</button>
            }
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