import './App.css';
import {Route, Routes} from 'react-router-dom'
import Login from './Components/Login';
import Home from './Components/Home'
import ContainerProducts from './Components/ContadinerProducts';
import { useEffect, useState } from 'react';

function App() {  
  const [name, setName] = useState('')

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/crear-cuenta' element={<Login/>}/>
        <Route path='/productos' element={<ContainerProducts/>}/>
      </Routes>
    </div>
  );
}

export default App;
