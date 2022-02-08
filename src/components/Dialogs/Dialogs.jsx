import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={classes.dialog}>
      <NavLink to={"/dialogs/" + props.id}> {props.name} </NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={classes.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItem}>
          <DialogItem name={"Victor"} id={"1"} />
          <DialogItem name={"Artyom"} id={"2"} />
          <DialogItem name={"Igor"} id={"3"} />
          <DialogItem name={"Andrey"} id={"4"} />
        </div>
        <div className={classes.messages}>
          <Message message={"Hi"} />
          <Message message={"How are you"} />
          <Message message={"Yo!"} />
        </div>
      </div>
    </div>
  );
}
export default Dialogs;