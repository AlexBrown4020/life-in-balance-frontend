import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import { List } from './list/List';
import Session from './session/Session';

function App() {
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
