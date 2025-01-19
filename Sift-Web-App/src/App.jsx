import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import MajorSkillsPrompt from './pages/MajorSkillPrompt';
import Account from './pages/account';
import Home from './pages/home';
import MapPage from './pages/MapPage';
import HomeComponent from './pages/home.jsx'
import LoginComponent from './pages/login.jsx' 



  
function App() {
  return (
    <div style={styles.container}>
      <BrowserRouter>
        {/* Floating navbar */}
        <header style={styles.header}>
          <Link to="/" style={styles.logo}>SIFT</Link>
          <nav style={styles.nav}>
            <Link to="/home" style={styles.navLink}>Home</Link>
            <Link to="/account" style={styles.navLink}>Account</Link>
            <Link to="/map" style={styles.navLink}>Map</Link>
          </nav>
          <div style={styles.headerright}>
            <Link to="/login" style={styles.button}>Login</Link>
            <Link to="/register" style={styles.button}>Signup</Link>
          </div>
        </header>

        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/prompt" element={<MajorSkillsPrompt />} />
          <Route path="/account" element={<Account />} />
          <Route path="/home" element={<Home />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#333333', // Same as the navbar
    minHeight: '100vh', // Full viewport height
    paddingTop: '4rem', // To avoid content overlapping the navbar
    color: '#FFFFFF', // Ensure text is readable on the dark background
  },
  header: {
    backgroundColor: '#333333', // Charcoal
    position: 'fixed', // Floating navbar
    top: 0,
    left: 0,
    width: '100%', // Full width
    zIndex: 1000, // Ensure it stays on top
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.5rem 1rem',
   borderBottom: '1px solid rgb(212, 212, 212)',
  },
  logo: {
    color: '#e3cba0', // Cream-ish text
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  nav: {
    display: 'flex',
    gap: '2rem',
    padding: '1rem 1rem 1rem 11rem'
  },
  navLink: {
    color: '#FFFFFF',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  headerright: {
    display: 'flex',
    gap: '1rem',
  },
  button: {
    color: '#FFFFFF',
    textDecoration: 'none',
    backgroundColor: '#444444', // Slightly lighter than the navbar
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    fontWeight: 'bold',
    border: '1px solid #FFFFFF', // Optional border for contrast
  },
};

export default App;
