import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    // TODO: call your backend API for login
    // if success:
    //   navigate('/home')
    // else show error
    navigate('/home')
  }

  return (
    <div className="container">
      <h1>Sign In</h1>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input 
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input 
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
