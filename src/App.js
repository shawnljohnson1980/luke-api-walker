import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from './components/form';
import Results from './components/results.jsx';
import Home from './components/home.jsx';
import Info from './components/info.jsx';
import { navigate, Router } from '@reach/router';
import React, { useState } from 'react';
function App() {
  const [myId, setMyId] = useState(1)
  const [myExtras, setMyExtras] = useState("people")
  const findSw = form => {
    setMyId(form.id);
    setMyExtras(form.extras)
  }
  return (
    <div className="App ">
      <div className="navbar bg-dark navbar-dark navbar-expand-lg  navbar-nav shadow mb-5">
        <h1 className="navbar-brand text-white ml-5">Luke API Walker</h1>
        <div className="form-group text-end"></div>
      </div>
      <div className="constainer mt-5">

        <Router>
          <Results path="/results" id={myId} extras={myExtras} />
          <Home path="/" />
          <Form path="/form" pullSw={findSw} />
          <Info path="/info" id={myId} extras={myExtras} />
        </Router>
      </div>
    </div >
  );
}

export default App;


