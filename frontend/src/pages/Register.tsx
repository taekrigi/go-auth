import React, { SyntheticEvent, useState } from 'react'
import { Redirect } from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    })

    setRedirect(true)
  }

  if (redirect) return <Redirect to='/login' />

  return (
    <form onSubmit={onSubmit}>
      <h1 className='h3 mb-3 fw-normal'>Please register</h1>
      <input
        className='form-control'
        placeholder='Name'
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='email'
        id='inputEmail'
        className='form-control'
        placeholder='Email address'
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        id='inputPassword'
        className='form-control'
        placeholder='Password'
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className='checkbox mb-3'></div>
      <button className='w-100 btn btn-lg btn-primary' type='submit'>
        submit
      </button>
    </form>
  )
}

export default Register
