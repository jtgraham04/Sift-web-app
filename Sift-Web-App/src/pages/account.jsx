import React, { useEffect, useState } from 'react'

function Account() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Example: fetch user info from backend
    // fetch('/api/user/me')
    //   .then(res => res.json())
    //   .then(data => setUser(data))
    //   .catch(err => console.error(err))

    // Mock user data:
    setUser({
      username: 'john_doe',
      major: 'Computer Science',
      skills: 'React, Node.js, MongoDB',
      education: 'BSc in Computer Science',
      profilePic: '/images/profile_pic.png',
      connections: ['Friend1', 'Friend2']
    })
  }, [])

  if (!user) return <div className="container">Loading...</div>

  return (
    <div className="container">
      <h1>Account Page</h1>
      <div style={{ textAlign: 'center' }}>
        <img 
          src={user.profilePic} 
          alt="Profile" 
          style={{ width: '120px', borderRadius: '50%' }} 
        />
      </div>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Major:</strong> {user.major}</p>
      <p><strong>Skills:</strong> {user.skills}</p>
      <p><strong>Education:</strong> {user.education}</p>
      <p>
        <strong>Connections:</strong> {user.connections.join(', ')}
      </p>
    </div>
  )
}

export default Account