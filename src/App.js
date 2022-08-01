import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import { List } from './pages/home/list/List';
import Session from './pages/home/session/Session';
import { useState, useEffect } from "react";

function App() {

  useEffect(() => {
    fetch('https://desolate-ravine-74694.herokuapp.com/classes/')
    .then((response) => console.log(response))
  }, [])

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/classes" element={<List/>}/>
          <Route path="/classes/:id" element={<Session/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
