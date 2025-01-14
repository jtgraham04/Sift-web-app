import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function MajorSkillsPrompt() {
  const [major, setMajor] = useState('')
  const [skills, setSkills] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: store major & skills in user profile (backend)
    navigate('/home')
  }

  return (
    <div className="container">
      <h2>Your Profession / Major & Skills</h2>
      <form onSubmit={handleSubmit}>
        <label>Major/Profession</label>
        <input 
          type="text"
          value={major}
          onChange={(e)=>setMajor(e.target.value)}
          required
        />

        <label>Key Skills</label>
        <input 
          type="text"
          value={skills}
          onChange={(e)=>setSkills(e.target.value)}
          placeholder="e.g. React, Node, Graphic Design..."
        />

        <button type="submit">Continue</button>
      </form>
    </div>
  )
}

export default MajorSkillsPrompt