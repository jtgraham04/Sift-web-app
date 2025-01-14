import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import MajorSkillsPrompt from './pages/MajorSkillPrompt'
import Account from './pages/account'
import Home from './pages/home'
import MapPage from './pages/MapPage'

function App() {
  return (
    <BrowserRouter>
      {/* Simple header navbar */}
      <header style={styles.header}>
        <Link to="/" style={styles.logo}>SIFT</Link>
        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>Login</Link>
          <Link to="/register" style={styles.navLink}>Sign Up</Link>
          <Link to="/home" style={styles.navLink}>Home</Link>
          <Link to="/account" style={styles.navLink}>Account</Link>
          <Link to="/map" style={styles.navLink}>Map</Link>
        </nav>
      </header>
      
      {/* Define your routes */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/prompt" element={<MajorSkillsPrompt />} />
        <Route path="/account" element={<Account />} />
        <Route path="/home" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  )
}

const styles = {
  header: {
    backgroundColor: '#333333', // Charcoal
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 1rem'
  },
  logo: {
    color: '#FFFFFF', // Cream-ish text
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    marginRight: '2rem'
  },
  nav: {
    display: 'flex',
    gap: '1rem'
  },
  navLink: {
    color: '#FFFFFF', // Light Beige
    textDecoration: 'none'
  }
}

export default App
