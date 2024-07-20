import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Download from './pages/Download';
import ProfileDisplay from './components/ProfileDisplay';
import './styles/Styles.css';

function App() {
  const [profile, setProfile] = useState(null);

  const handleLogin = (userProfile) => {
    setProfile(userProfile);
  };

  const handleLogout = () => {
    setProfile(null);
  };

  return (
    <Router>
      <div className="App">
        <Navbar onLogin={handleLogin} isLoggedIn={!!profile} />
        {profile && (
          <div style={styles.profileContainer}>
            <ProfileDisplay profile={profile} onLogout={handleLogout} />
          </div>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<Download />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  profileContainer: {
    position: 'absolute',
    top: '60px',
    right: '20px',
    zIndex: 1000,
  },
};

export default App;