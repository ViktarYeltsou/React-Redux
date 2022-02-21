import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  const messageElements = props.messages.map(el => <Message message={el.message} id={el.id}/> )
  const dialogElements = props.dialogs.map(el => <DialogItem name={el.name} id={el.id}/> )

  const addMessageClick = () => {
    props.addMessage()
  }
  const onMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageText(body);
  }

  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItem}>
          {dialogElements}
        </div>
        <div className={classes.messages}>
          {messageElements}
          <div>
            <div>
              <textarea onChange={onMessageChange} value={props.newMessageText} />
            </div>
            <div>
              <button onClick={addMessageClick}>Add message</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
export default Dialogs;