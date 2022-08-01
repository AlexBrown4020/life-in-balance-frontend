import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import { List } from './pages/home/list/List';
import Session from './pages/home/session/Session';
import { useState, useEffect } from 'react';

function App() {
const API_URL = 'https://desolate-ravine-74694.herokuapp.com/classes/';

const [fetchError, setFetchError] = useState(null);
const [items, setItems] = useState([]);

useEffect(() => {
  const fetchItems = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error('Did not receive expected data from backend server')
      const listItems = await response.json();
      console.log(listItems);
      setItems(listItems);
      setFetchError(null);
    } catch (err) {
      setFetchError(err.message);
    }
  };

  (async () => await fetchItems())();
}, [])
  
  return (
    <div className='App'>``
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/classes" element={<List/>}/>
          <Route path="/classes/:id" element={<Session/>}/>
        </Routes>
      </BrowserRouter>
      {items.map((item, i) => (
        <tr key={i}>
          <td>{item.title}</td>
          <td>{item.description}</td>
          <td>{item.date}</td>
          <td>{item.time}</td>
        </tr>
      ))}
    </div>
  );
}

export default App;
