import {addMessageAC, updateNewMessageAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  const state = props.store.getState().dialogPage;

  const addMessage = () => {
    props.store.dispatch(addMessageAC())
  }
  const onMessageChange = (body) => {
    props.store.dispatch(updateNewMessageAC(body));
  }

  return <Dialogs addMessage={addMessage} updateNewMessageText={onMessageChange} state={state}/>

}

// const SuperDialogsContainer =
export default DialogsContainer;