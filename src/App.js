import './App.css';
import { Route,Routes } from 'react-router-dom';
import {Home} from './pages/Home';
import {Login} from './pages/Login';
import {SignUp} from './pages/SignUp';
import {Streaming} from './pages/Streaming';
import { Waiting } from './pages/Waiting';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/waiting" element={<Waiting/>}/>
      <Route path="/streaming" element={<Streaming/>}/>
      </Routes>
    </div>
  );
}

export default App;
