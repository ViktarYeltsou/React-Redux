import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" className={nd => nd.isActive ? classes.active : classes.item}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" className={nd => nd.isActive ? classes.active : classes.item}> Messages</NavLink>
      {/*  nd - название переменной функции. может быть любым. используется для проверки активности ссылки*/}
      </div>
      <div className={classes.item}>
        <NavLink to="/news" className={nd => nd.isActive ? classes.active : classes.item}> News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/musik" className={nd => nd.isActive ? classes.active : classes.item}> Musik</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" className={nd => nd.isActive ? classes.active : classes.item}> Settings</NavLink>
      </div>
    </nav>
  )
}
export default Navbar;
