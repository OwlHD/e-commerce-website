import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NavBar from './components/Navbar'
import './App.css'

function App() {
  const [user, setUser] = useState({})

  useEffect(() => {
    const infoUser = JSON.parse(localStorage.getItem('Username'))
    const infoToken = JSON.parse(localStorage.getItem('Token'))
    if (infoUser) {
      setUser(item => ({...item, Username:infoUser}))
      console.log('good', user)
    } else {
      console.log('username not found')
    }
    if (infoToken) {
      setUser(item => ({...item, Token:infoToken}))
      console.log('good', user)
    } else {
      console.log('token not found')
    }
  },[])

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Outlet context={{user, setUser}}/>
    </>
  )
}

export default App
