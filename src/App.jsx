import { Routes, Route } from 'react-router-dom';
import HomePage  from './pages/Homepage';
import Auth from './pages/Auth';
import Checkout from './pages/Checkout';

import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="auth" element={<Auth/>}></Route>
      <Route path="checkout" element={<Checkout/>}></Route>
    </Routes>
  );
}


export default App;
