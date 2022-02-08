import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItem}>
          <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to="/dialogs/1"> Archy_old </NavLink>
          </div>
          <div className={classes.dialog}>
            <NavLink to="/dialogs/2"> Igor </NavLink>
          </div>
          <div className={classes.dialog}>
            <NavLink to="/dialogs/3"> Andrey </NavLink>
          </div>
        </div>
        <div className={classes.messages}>
          <div className={classes.message}>Hi</div>
          <div className={classes.message}>How are you</div>
          <div className={classes.message}>Yo!</div>
        </div>
      </div>
    </div>
  );
}
export default Dialogs;