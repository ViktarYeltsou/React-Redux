import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



// const dialogData = [
//   {id: 1, name: 'Victor'},
//   {id: 2, name: 'Archi'},
//   {id: 3, name: 'Igor'},
//   {id: 4, name: 'Andrey'},
//   {id: 5, name: 'Artem'}
// ];

// const messageData = [
//   {id: 1, message: 'Hi!'},
//   {id: 2, message: 'How are you?'},
//   {id: 3, message: 'Yo!Yo!'},
// ];

// const dialogElements = dialogData.map(el => <DialogItem name={el.name} id={el.id}/> )
// const messageElements = messageData.map(el => <Message message={el.message} id={el.id}/> )

const Dialogs = (props) => {
  const messageElements = props.messageData.map(el => <Message message={el.message} id={el.id}/> )
  const dialogElements = props.dialogData.map(el => <DialogItem name={el.name} id={el.id}/> )

  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItem}>
          {dialogElements}
        </div>
        <div className={classes.messages}>
          {messageElements}
        </div>
      </div>
    </div>
  );
}
export default Dialogs;