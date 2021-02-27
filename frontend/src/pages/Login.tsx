import React, { SyntheticEvent, useState } from 'react'
import { Redirect } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    })

    setRedirect(true)
  }

  if (redirect) return <Redirect to='/' />

  return (
    <form onSubmit={onSubmit}>
      <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>
      <input
        type='email'
        id='inputEmail'
        className='form-control'
        placeholder='Email address'
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        id='inputPassword'
        className='form-control'
        placeholder='Password'
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className='checkbox mb-3'></div>
      <button className='w-100 btn btn-lg btn-primary' type='submit'>
        Sign in
      </button>
    </form>
  )
}

export default Login
