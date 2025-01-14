import React from 'react'

function Home() {
  return (
    <div className="container">
      <h1>Welcome to MentoReach</h1>
      <p>“One job at a time”</p>
      <p style={{marginTop:'1rem'}}>Words that represent us:</p>
      <ul>
        <li>Swiftness</li>
        <li>Precise</li>
        <li>Trusted</li>
        <li>Inspiring</li>
        <li>Opportunistic</li>
        <li>Professional</li>
      </ul>
      <p style={{ marginTop:'1rem' }}>
        Discover jobs that match your profile, connect with friends, and 
        grow your career opportunities.
      </p>
      <h3 style={{ marginTop:'2rem' }}>Highlighted Job Slide</h3>
      <div style={jobSlideStyle}>
        <div>
          <p><strong>Job Title:</strong> React Developer</p>
          <p><strong>Salary:</strong> $80k - $100k</p>
          <p><strong>Description:</strong> Building front-end web apps with React.</p>
          <p><strong>Match:</strong> 85%</p>
        </div>
      </div>
    </div>
  )
}

const jobSlideStyle = {
  border: '1px solid #ccc',
  padding: '1rem',
  marginTop: '1rem',
  backgroundColor: '#D3D3D3', // Light Grey
}

export default Home