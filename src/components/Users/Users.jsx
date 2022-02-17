import classes from "./Users.module.css";

const Users = (props) => {

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