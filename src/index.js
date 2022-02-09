// import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';

import state, {addPost, subscriber, updateNewPostText} from './redux/state'
// import {renderEntireTree} from "./render";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state}
             addPost={addPost}
             updateNewPostText={updateNewPostText}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderEntireTree(state);
 // В state мы не можем импортировать функцию renderEntireTree, но мы можем ее туда передать через subscribe,
 //  который вызывается в index.js. После чего, созданная функция renderEntireTree в state переопределяется на ту,
 //  которую мы передали в subscribe. И теперь, когда мы добавляем пост, в state вызывается эта функция renderEntireTree
subscriber(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
