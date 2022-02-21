import classes from "./Users.module.css";
import axios from "axios";
import React from "react";

class Users extends React.Component {
  constructor(props) {
    super(props);
    alert("new");
    axios.get("http://localhost:5000/api/users").then(response => {
      // console.log(response)
      this.props.setUsers(response.data)
    });
  }

  render() {
    return <div>
      {
        this.props.users.map(u =>
          <div key={u.id}>
          <span>
            <div>
              <img src={u.userUrl} alt="ava" className={classes.userPhoto}/>
            </div>

            {u.followed
              ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
              : <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
}
export default Users;