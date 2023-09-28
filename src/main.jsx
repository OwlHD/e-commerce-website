import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route, Navigate, Outlet, useOutletContext, useLocation,
} from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Category from './pages/Category.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import Cart from './pages/Cart.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function RouteWrapper() {
  const location = useLocation();
  return (JSON.parse(localStorage.getItem('token'))) ? (
    <Outlet context={useOutletContext()} />
  ) : (
    <Navigate
      to="/login/"
      replace
      state={{ location }}
    />
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="category/:id" element={<Category />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<RouteWrapper />}>
          <Route index element={<Profile />} />
        </Route>
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  </BrowserRouter>
  ,
);
