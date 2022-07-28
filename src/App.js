import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import { List } from './list/List';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/classes" element={<List/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
