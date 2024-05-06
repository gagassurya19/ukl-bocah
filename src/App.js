import React from 'react';

// import router
import { Link, Route, Routes } from 'react-router-dom';

// import pages
import CoffeMenu from './pages/admin/coffe_menu';
import Login from './pages/admin/login';
import Transaction from './pages/admin/transaction';
import Etalase from './pages/customer/etalase';
import Cart from './pages/customer/cart';

function App() {
  return (
    <>
      {/* navigasi */}
      <nav>
        <ul>
          <li>
            <Link to='/'>Coffe Ordering System</Link>
          </li>
          <li>
            <Link to='/cart'>Cart</Link>
          </li>
          <li>
            <Link to='/admin/menu'>Admin Cofffe Menu</Link>
          </li>
          <li>
            <Link to='/admin/transaction'>Admin Transaction History</Link>
          </li>
          <li>
            <Link to='/admin/login'>Admin Login</Link>
          </li>
        </ul>
      </nav>

      {/* routing */}
      <Routes>
        <Route path='/' element={<Etalase />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/admin/login' element={<Login />} />
        <Route path='/admin/menu' element={<CoffeMenu />} />
        <Route path='/admin/transaction' element={<Transaction />} />
      </Routes>
    </>
  );
}

export default App;
