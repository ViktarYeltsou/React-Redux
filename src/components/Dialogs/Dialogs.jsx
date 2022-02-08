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

const dialogData = [
  {id: 1, name: 'Victor'},
  {id: 2, name: 'Archi'},
  {id: 3, name: 'Igor'},
  {id: 4, name: 'Andrey'},
  {id: 5, name: 'Artem'}
];

const messageData = [
  {id: 1, message: 'Hi!'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'Yo!'},
];


const Dialogs = (props) => {
  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItem}>
          <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
          <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
          <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
          <DialogItem name={dialogData[3].name} id={dialogData[3].id}/>
          <DialogItem name={dialogData[4].name} id={dialogData[4].id}/>
        </div>
        <div className={classes.messages}>
          <Message message={messageData[0].message}/>
          <Message message={messageData[1].message}/>
          <Message message={messageData[2].message}/>
        </div>
      </div>
    </div>
  );
}
export default Dialogs;