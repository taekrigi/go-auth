import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  const [name, setName] = useState('')

  useEffect(() => {
    ;(async () => {
      const response = await fetch('http://localhost:8000/api/user', {
        method: 'GET',
        credentials: 'include',
      })

      const content = await response.json()

      setName(content.name)
    })()
  })
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <main className='form-signin'>
          <Route path='/' exact component={() => <Home name={name} />} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
