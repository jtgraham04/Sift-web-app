import React from 'react'
import JobItem from '../components/JobItem'

function MapPage() {
  // Example job data (in a real app, fetch from backend)
  const jobs = [
    { id: 1, title: 'Frontend Dev', description: 'React + CSS', salary: '$70k', match: '90%' },
    { id: 2, title: 'Backend Dev', description: 'Node + Express', salary: '$85k', match: '75%' },
    { id: 3, title: 'UI/UX Designer', description: 'Figma + Prototyping', salary: '$60k', match: '80%' },
    { id: 4, title: 'Fullstack Dev', description: 'React + Node', salary: '$95k', match: '68%' }
  ]

  return (
    <div style={styles.mapPageContainer}>
      <div style={styles.jobList}>
        <h2>Jobs</h2>
        {jobs.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </div>
      <div style={styles.mapArea}>
        {/* Replace with an actual map or image of map */}
        <h2>Map</h2>
        <img 
          src="/images/map_placeholder.png" 
          alt="Map" 
          style={{width:'90%', height:'auto'}}
        />
      </div>
    </div>
  )
}

const styles = {
  mapPageContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '80vh'
  },
  jobList: {
    width: '30%',
    backgroundColor: '#F5F5DC', // Light Beige
    padding: '1rem',
    overflowY: 'auto'
  },
  mapArea: {
    width: '70%',
    backgroundColor: '#AFC7D0', // Light Blue with Grey Hue
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default MapPage