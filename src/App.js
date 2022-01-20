import './App.css';
import {Route, Routes} from 'react-router-dom'
import CrearCuenta from './Components/CrearCuenta';
import Home from './Components/Home'
import ContainerProducts from './Components/ContadinerProducts';
import { useEffect, useState } from 'react';
import FormBuy from './Components/FormBuy';
import Facturacion from './Components/Facturacion';
import ContainerCompras from './Components/ContainerCompras';

function App() {  
  const [name, setName] = useState('')

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/crear-cuenta' element={<CrearCuenta/>}/>
        <Route path='/productos' element={<ContainerProducts/>}/>
        <Route path='/compra' element={<FormBuy/>}/>
        <Route path='/facturar' element={<Facturacion/>}/>
        <Route path='/compras' element={<ContainerCompras/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
