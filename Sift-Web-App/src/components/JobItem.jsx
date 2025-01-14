import React from 'react'

function JobItem({ job }) {
  return (
    <div style={styles.card}>
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p><strong>Match:</strong> {job.match}</p>
    </div>
  )
}

const styles = {
  card: {
    backgroundColor: '#FAF3E0', // Cream
    marginBottom: '1rem',
    padding: '1rem',
    borderRadius: '6px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  }
}

export default JobItem
