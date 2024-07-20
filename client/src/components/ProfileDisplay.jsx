import React, { useState } from 'react';

function ProfileDisplay({ profile, onLogout }) {
  const [showAccounts, setShowAccounts] = useState(false);

  const toggleAccounts = () => {
    setShowAccounts(!showAccounts);
  };

  return (
    <div style={styles.container} className='Profile'>
      <div style={styles.header}>
        <span style={styles.closeButton} onClick={onLogout}>×</span>
        <h2 style={styles.greeting}>Hi, {profile.givenName}!</h2>
      </div>
      <img src={profile.imageUrl} alt="Profile" style={styles.profileImage} />
        <p style={styles.email}>{profile.email}</p>
      <button style={styles.signout}>Sign Out</button>
    </div>
  );
}

const styles = {
  container: {
    width: '300px',
    backgroundColor: '#333',
    color: 'white',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    alignItems: 'center',
    marginBottom: '16px',
  },
  closeButton: {
    fontSize: '24px',
    cursor: 'pointer'
  },
  email: {
    margin: 0,
    textAlign: 'center',
    marginBottom:'10px',
    marginTop:'10px'
  },
  profileImage: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    margin: '0 auto',
    display: 'block',
  },
  greeting: {
    textAlign: 'center',
    margin: '16px 0',
  },
  signout: {
    width: '100%',
    padding: '10px',
    backgroundColor: 'transparent',
    border: '1px solid white',
    color: 'white',
    borderRadius: '20px',
    cursor: 'pointer',
    marginBottom: '10px',
  }
};

export default ProfileDisplay;