import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './components/Navigation/Navbar';
import './App.css';

function App() {
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([JSON.parse(localStorage.getItem('cart'))]);
  useEffect(() => {
    const infoUser = JSON.parse(localStorage.getItem('username'));
    const infoToken = JSON.parse(localStorage.getItem('token'));
    const infoId = JSON.parse(localStorage.getItem('id'));
    const infoCart = JSON.parse(localStorage.getItem('cart'));
    if (infoUser) {
      setUser((item) => ({ ...item, username: infoUser }));
    } else {
      console.log('username not found');
    }
    if (infoToken) {
      setUser((item) => ({ ...item, token: infoToken }));
    } else {
      console.log('token not found');
    }
    if (infoId) {
      setUser((item) => ({ ...item, id: infoId }));
    } else {
      console.log('id not found');
    }
    if (infoCart) {
      setUser((item) => ({ ...item, cart: infoCart }));
      setCart(infoCart);
    } else {
      console.log('cart not found');
    }
  }, []);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Outlet context={{
        user, setUser, cart, setCart,
      }}
      />
    </>
  );
}

export default App;
