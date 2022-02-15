import {addMessageAC, updateNewMessageAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    messages: state.dialogPage.messages,
    dialogs: state.dialogPage.dialogs,
    newMessageText: state.dialogPage.newMessageText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => dispatch(addMessageAC()),
    updateNewMessageText: (body) => dispatch(updateNewMessageAC(body))
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;