import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    // TODO: call your backend endpoint for "create account"
    // Possibly send verification email via Mailtrap
    // If successful, navigate to next step (major & skills prompt)
    navigate('/prompt')
  }

  return (
    <div className="container">
      <h1>Create Account</h1>
      <form onSubmit={handleRegister}>
        <label>Email</label>
        <input 
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />

        <label>Username</label>
        <input 
          type="text"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          required
        />

        <label>Password</label>
        <input 
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default Register