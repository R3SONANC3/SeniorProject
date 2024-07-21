import React, { useState } from 'react';

function ProfileDisplay({ profile, onLogout, onClose }) {
  const [showAccounts, setShowAccounts] = useState(false);

  const toggleAccounts = () => {
    setShowAccounts(!showAccounts);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.closeButton} onClick={onClose}>×</span>
        <h2 style={styles.greeting}>Hi, {profile.givenName}!</h2>
      </div>
      <img src={profile.imageUrl} alt="Profile" style={styles.profileImage} />
      <p style={styles.email}>{profile.email}</p>
      <button style={styles.signout} onClick={onLogout}>Sign Out</button>
    </div>
  );
}

const styles = {
  container: {
    width: '320px',
    background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
    color: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.1)',
    fontFamily: "'Helvetica Neue', sans-serif",
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center child elements horizontally
    justifyContent: 'center', // Center child elements vertically
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: '20px',
  },
  closeButton: {
    fontSize: '24px',
    cursor: 'pointer',
    color: 'white',
    transition: 'color 0.3s',
  },
  email: {
    margin: 0,
    fontSize: '16px',
    marginBottom: '20px',
  },
  profileImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    margin: '0 auto 20px auto',
    border: '4px solid white',
  },
  greeting: {
    fontSize: '24px',
    margin: 0,
    width: '100%',
    textAlign: 'center',
  },
  signout: {
    width: '100%',
    padding: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    border: '1px solid white',
    color: 'white',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
  },
};

export default ProfileDisplay;
