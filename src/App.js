import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route, BrowserRouter} from "react-router-dom";

const App = () => {

  const messageData = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo!Yo!'},
  ];
  const dialogData = [
    {id: 1, name: 'Victor'},
    {id: 2, name: 'Archi'},
    {id: 3, name: 'Igor'},
    {id: 4, name: 'Andrey'},
    {id: 5, name: 'Artem'}
  ];

  const postsData = [
    {id: 1, message: 'How are you, dude?!', likesCount: 10},
    {id: 2, message: 'I\'m fine', likesCount: 11},
    {id: 3, message: 'Well done!', likesCount: 12}
  ];
  return (
  <BrowserRouter>
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <div className="app-wrapper-content">
        <Routes>
          <Route path='/profile' element={<Profile postsData={postsData}/>}/>
          <Route path='/dialogs' element={<Dialogs messageData={messageData} dialogData={dialogData}/>} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
