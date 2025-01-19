import React, { useEffect, useState } from 'react'
// Import the local image
import ryanPic from './images/ryan.png' 

function Account() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Mock user data to showcase the layout
    setUser({
      name: 'Ryan Sullivan',
      university: 'University of Arkansas',
      degree: 'Engineering',
      // Use the imported image as the profilePic
      profilePic: ryanPic, 
      posts: 4,
      friends: 95,
      knots: 12,
      skills: ['CAD', 'Sales', 'Design'],
      interests: ['Cars', 'Entrepreneurship'],
      jobExperience: ['Engineering Intern', 'Lawn maintenance manager'],
      knotsList: [
        { name: 'Jack Graham', daysLeft: 44 },
        { name: 'Zane Drodza', daysLeft: 44 },
      ],
    })
  }, [])

  if (!user) return <div className="container">Loading...</div>

  return (
    <div style={styles.pageContainer}>
      {/* LEFT PROFILE CARD */}
      <div style={styles.leftCard}>
        <img
          src={user.profilePic}
          alt="Profile"
          style={styles.profileImage}
        />
        <h2 style={{ margin: '10px 0' }}>{user.name}</h2>
        <p><strong>University:</strong><br /> {user.university}</p>
        <p><strong>Degree:</strong><br /> {user.degree}</p>
      </div>

      {/* RIGHT DETAILS PANEL */}
      <div style={styles.rightPanel}>
        {/* Top stats row */}
        <div style={styles.statsRow}>
          <div style={styles.statBox}>
            <span style={styles.statLabel}>Posts</span>
            <span style={styles.statValue}>{user.posts}</span>
          </div>
          <div style={styles.statBox}>
            <span style={styles.statLabel}>Friends</span>
            <span style={styles.statValue}>{user.friends}</span>
          </div>
          <div style={styles.statBox}>
            <span style={styles.statLabel}>Knots</span>
            <span style={styles.statValue}>{user.knots}</span>
          </div>
        </div>

        {/* Middle section for Skills, Interests, Job Experience */}
        <div style={styles.detailsContainer}>
          <h3>Skills:</h3>
          <ul>
            {user.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>

          <h3>Interests:</h3>
          <ul>
            {user.interests.map((interest, idx) => (
              <li key={idx}>{interest}</li>
            ))}
          </ul>

          <h3>Job Experience:</h3>
          <ul>
            {user.jobExperience.map((job, idx) => (
              <li key={idx}>{job}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* BOTTOM KNOTS SECTION */}
      <div style={styles.knotsContainer}>
        <h2>Knots</h2>
        {user.knotsList.map((knot, idx) => (
          <div key={idx} style={styles.knotRow}>
            <span>{knot.name}:</span>
            {/* Example "progress bar" or day-left indicator */}
            <div style={styles.progressBarOuter}>
              <div
                style={{
                  ...styles.progressBarInner,
                  width: `${100 - knot.daysLeft}%`,
                }}
              ></div>
            </div>
            <span style={{ marginLeft: 10 }}>
              You have {knot.daysLeft} days to meet with {knot.name}!
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  pageContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#202020'
  },
  leftCard: {
    flex: '1 1 250px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    maxWidth: '300px',
    textAlign: 'center',
    backgroundColor: '7d6a4d'
    
  },
  profileImage: {
    width: '150px',
    height: '150px',
    borderRadius: '8px',
    objectFit: 'cover',
  },
  rightPanel: {
    flex: '1 1 600px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    margin: '10px',
    padding: '20px',
    minWidth: '300px',
  },
  statsRow: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  statBox: {
    textAlign: 'center',
  },
  statLabel: {
    display: 'block',
    fontWeight: 'bold',
  },
  statValue: {
    fontSize: '1.2em',
    marginTop: '5px',
    display: 'block',
  },
  detailsContainer: {
    marginTop: '20px',
  },
  knotsContainer: {
    flex: '1 1 100%',
    border: '1px solid #ccc',
    borderRadius: '8px',
    margin: '10px',
    padding: '20px',
  },
  knotRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  progressBarOuter: {
    width: '80px',
    height: '10px',
    backgroundColor: '#eee',
    marginLeft: '10px',
    borderRadius: '5px',
    overflow: 'hidden',
    position: 'relative',
  },
  progressBarInner: {
    backgroundColor: 'red',
    height: '100%',
    transition: 'width 0.3s ease',
  },
}

export default Account
