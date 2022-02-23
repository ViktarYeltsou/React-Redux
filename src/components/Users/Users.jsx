import classes from "./Users.module.css";
import axios from "axios";
import React from "react";

class Users extends React.Component {

  componentDidMount() {
    axios.get(`http://localhost:5000/api/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
      .then(response => {
        this.props.setUsers(response.data.users)

        this.props.setTotalUsersCount(response.data.totalCount)
        debugger
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`http://localhost:5000/api/users?count=${this.props.pageSize}&page=${pageNumber}`)
      .then(response => {
        this.props.setUsers(response.data.users)
        this.props.setTotalUsersCount(response.data.totalCount)

      });
}
  render() {

    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = []
    debugger
    for (let i = 1; i <= pagesCount; i++)
      pages.push(i);


    return <div>
      <div>
        {
          pages.map( p => {
            return <span className={this.props.currentPage === p && classes.selected} onClick={()=> {this.onPageChanged(p)}}> {p} </span>
          })
        }

      </div>
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