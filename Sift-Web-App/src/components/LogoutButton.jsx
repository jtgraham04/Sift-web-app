import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token
    navigate('/login'); // Redirect to login
  };

  return (
    <button onClick={handleLogout} style={styles.button}>
      Logout
    </button>
  );
};

const styles = {
  button: {
    color: '#FFFFFF',
    backgroundColor: '#FF4D4D', // Red for logout
    border: 'none',
    borderRadius: '5px',
    padding: '0.5rem 1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default LogoutButton;
