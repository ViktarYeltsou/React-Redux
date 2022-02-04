import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Router} from "react-router-dom";

function App(props) {

  return (

    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <div className="app-wrapper-content">
        <Router history=''>
          <Route path='/profile' component={Profile}/>
          <Route path='/messages' component={Dialogs}/>
        </Router>
      </div>
    </div>

  );
}

export default App;
