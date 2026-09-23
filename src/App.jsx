import { Routes, Route } from 'react-router-dom';
import HomePage  from './pages/Homepage';
import Auth from './pages/Auth';
import Checkout from './pages/Checkout';
import Navbar from './components/NavigationBar';


import './App.css';
import ProductDetails from './pages/ProductDetails';

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="auth" element={<Auth/>}></Route>
      <Route path="checkout" element={<Checkout/>}></Route>
      <Route path='/products/:id' element={<ProductDetails/>}></Route>
    </Routes>

    </>
  );
}


export default App;
