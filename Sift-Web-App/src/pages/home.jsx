import React from 'react';

// Function to generate random job data
const generateJobs = () => {
  const jobTitles = ['React Developer', 'Backend Engineer', 'Data Scientist', 'UI/UX Designer', 'Full Stack Developer'];
  const salaryRanges = ['$60k - $80k', '$80k - $100k', '$100k - $120k', '$120k - $150k'];
  const descriptions = [
    'Building and maintaining scalable web applications.',
    'Designing and managing APIs and server-side logic.',
    'Analyzing data to derive actionable insights.',
    'Creating user-friendly and visually appealing interfaces.',
    'Developing both client-side and server-side components.',
  ];
  const matches = ['85%', '75%', '90%', '80%'];

  const randomIndex = () => Math.floor(Math.random() * 5); // Helper function to generate random index

  return Array.from({ length: 4 }, () => ({
    title: jobTitles[randomIndex()],
    salary: salaryRanges[randomIndex()],
    description: descriptions[randomIndex()],
    match: matches[randomIndex()],
  }));
};

function Home() {
  const jobs = generateJobs();

  return (
    <div className="background" style={styles.background}>
      <div style={styles.heroSection}>
        <h1 style={styles.title}>Welcome to MentoReach</h1>
      </div>
      <p style={styles.description}>
        Discover jobs that match your profile, connect with friends, and grow your career opportunities.
      </p>
      <h3 style={styles.highlightedTitle}>Highlighted Jobs</h3>
      <div style={styles.jobsContainer}>
        {jobs.map((job, index) => (
          <div key={index} style={styles.jobCard}>
            <p>
              <strong>Job Title:</strong> {job.title}
            </p>
            <p>
              <strong>Salary:</strong> {job.salary}
            </p>
            <p>
              <strong>Description:</strong> {job.description}
            </p>
            <p>
              <strong>Match:</strong> {job.match}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  background: {
    backgroundColor: '#202020', // Light Grey
    minHeight: '100vh',
    padding: '2rem',
    textAlign: 'center', // Center align all content
  },
  heroSection: {
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2.5rem',
    color: '#FFFFFF',
    margin: 0,
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#FFFFFF',
    margin: '0.5rem 0',
  },
  wordsTitle: {
    fontSize: '1.2rem',
    marginTop: '2rem',
    color: '#FFFFFF',
  },
  wordList: {
    listStyleType: 'none',
    padding: 0,
    margin: '1rem auto',
    display: 'inline-block',
    textAlign: 'left',
  },
  description: {
    marginTop: '1.5rem',
    fontSize: '1rem',
    color: '#FFFFFF',
  },
  highlightedTitle: {
    marginTop: '2rem',
    fontSize: '1.5rem',
    color: '#FFFFFF',
  },
  jobsContainer: {
    marginTop: '1rem',
  },
  jobCard: {
    border: '1px solid #ccc',
    padding: '1rem',
    marginBottom: '1rem',
    backgroundColor: '#7d6a4d',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    fontsize: '1rem',
    color: '#FFFFFF'
  },
};

export default Home;
