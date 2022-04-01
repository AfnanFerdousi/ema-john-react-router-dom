import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
      </Routes>
    </div>
  );
}

export default App;
